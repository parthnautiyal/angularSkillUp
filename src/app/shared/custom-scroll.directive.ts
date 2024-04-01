import {
  Directive,
  Renderer2,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[customScrollTracker]',
  standalone: true,
})
export class CustomScrollDirective implements AfterViewInit, OnDestroy {
  @Output() scrollPercent = new EventEmitter<number>();
  private scrollEvent!: () => void;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const scrollableDiv = this.el.nativeElement;
    this.scrollEvent = this.renderer.listen(
      scrollableDiv,
      'scroll',
      (event: Event) => {
        const target = event.target as HTMLElement;
        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight;
        const clientHeight = target.clientHeight;
        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        this.scrollPercent.emit(percentage);
      }
    );
  }

  ngOnDestroy() {
    if (this.scrollEvent) {
      this.scrollEvent(); // Unsubscribe from the scroll event
    }
  }
}
