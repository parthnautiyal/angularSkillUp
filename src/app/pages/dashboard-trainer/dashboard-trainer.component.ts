import { Component, OnInit } from '@angular/core';
import { ListboxFilterOptions } from 'primeng/listbox';

interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dashboard-trainer',
  templateUrl: './dashboard-trainer.component.html',
  styleUrls: ['./dashboard-trainer.component.sass'],
})
export class DashboardTrainerComponent implements OnInit {
  countries: Country[];

  selectedCountries: Country[] = [];

  filterValue = '';

  constructor() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }

  // myResetFunction(options: MultiSelectFilterOptions) {
  //   options.reset();
  //   this.filterValue = '';
  // }
  onScroll(percentage: number) {
    console.log('Scroll percentage:', percentage);
  }
  handleClick() {
    console.log(this.selectedCountries);
  }
  ngOnInit(): void {}
}
