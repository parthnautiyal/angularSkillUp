import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appScrollTracker]',
  standalone: true,
})
export class ScrollTrackerDirective implements AfterViewInit, OnDestroy {
  @Output() scrollPercent = new EventEmitter<number>();
  private scrollEvent!: Function;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const scrollableDiv = this.el.nativeElement.querySelector(
      '.p-listbox-list-wrapper'
    );
    if (scrollableDiv) {
      this.scrollEvent = this.renderer.listen(
        scrollableDiv,
        'scroll',
        (event: any) => {
          const scrollTop = event.target.scrollTop;
          const scrollHeight = event.target.scrollHeight;
          const clientHeight = event.target.clientHeight;
          const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
          this.scrollPercent.emit(percentage);
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.scrollEvent) {
      this.scrollEvent();
    }
  }
}
