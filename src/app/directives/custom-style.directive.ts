import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public ele:ElementRef) { 
    this.ele.nativeElement.style.fontWeight = 'bold';
    this.ele.nativeElement.style.background = 'yellow';

  }


}
