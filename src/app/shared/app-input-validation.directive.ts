import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appInputValidation]',
  standalone: true,
})
export class AppInputValidationDirective {
  @Input() set appInputValidation(isInvalid: boolean | undefined) {
    console.log(isInvalid);

    if (isInvalid) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-invalid');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
    }
  }

  // @HostBinding('style.display') displayError = 'none';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
