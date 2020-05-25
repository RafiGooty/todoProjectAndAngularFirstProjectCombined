import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector:'[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit{

  @Input() public autoFocus: boolean;
  constructor( private el:ElementRef){}

  ngAfterViewInit(){
    setTimeout(()=>{
        this.el.nativeElement.focus();
    },500)
  }
}
