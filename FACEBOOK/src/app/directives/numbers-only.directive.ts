import { Directive , HostListener, ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
 @Input() maxLength=10;
  constructor(private el:ElementRef) {

   }
@HostListener('keypress',["$event"]) onkeypress(evt){
   var regex = new RegExp(/^\d+$/);
    var isNumber = regex.test(evt.key);
    var totalLength = this.el.nativeElement.value.length;
     if(totalLength>=this.maxLength || !isNumber){
       evt.preventDefault();
     }

}
}
