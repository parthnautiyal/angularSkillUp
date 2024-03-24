import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store} from '@ngrx/store';
import { Error } from 'src/app/models/Error';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { selectPathByIdLoading, selectPathsError } from 'src/app/state/selector/path.selector';

@Component({
  selector: 'app-path-page',
  templateUrl: './path-page.component.html',
  styleUrls: ['./path-page.component.sass'],
})
export class PathPageComponent implements OnInit {
  id: number = 0;
  loading:boolean = true;
  error:boolean = false;
  errorCard: Error = {
    message: '',
    code: 0,
  };
  constructor(private store: Store, private route: ActivatedRoute,private mis:MiscellaneousService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mis.getPathData(this.id);
    this.mis.loading$.subscribe((res)=>{
      if (res==false){
        setTimeout(() => {
          this.loading = res;
        }, 700);
      }else{
        this.loading = res;
      }
    });
    this.store.select(selectPathsError).subscribe((res)=>{
      if (res!=null){
        this.loading =false;
       this.error = true;
       this.errorCard.message = res.message.split('`').slice(1);
            this.errorCard.code = res.message.split('`').slice(0, 1);
            console.log('Paths Error -> ' + this.errorCard.code);
            this.error = true;
      }
    });
  }
}
