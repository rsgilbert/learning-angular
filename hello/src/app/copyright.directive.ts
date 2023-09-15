import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef) {
    console.log('copy')
    const currentYear = new Date().getFullYear()
    const targetEl: HTMLElement = el.nativeElement
    targetEl.classList.add('copyright')
    targetEl.textContent = `Copyright ©${currentYear} All Rights Reserved.`
   }

}
