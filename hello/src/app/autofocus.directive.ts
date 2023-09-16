import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutofocusDirective implements OnInit {

  constructor(el: ElementRef) { 
    const targetEl: HTMLElement = el.nativeElement
    targetEl.style.fontStyle = 'italic'
  }

  ngOnInit(): void {
    //   console.log('focusing')
  }
}
