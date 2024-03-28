import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appScrollTracker]',
  standalone: true,
})
export class ScrollTrackerDirective {
  @Output() scrollPercent = new EventEmitter<number>();

  constructor(private el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;
    const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    this.scrollPercent.emit(percentage);
  }
}
