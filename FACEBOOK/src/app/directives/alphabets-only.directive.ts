import { Directive, HostListener,ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appAlphabetsOnly]'
})
export class AlphabetsOnlyDirective {

  constructor(private el:ElementRef) { }
 @Input() lengthOfName=15;
    @HostListener("keypress",["$event"])
    onKeyPress(evt){
      var regex = new RegExp(/^[a-zA-Z\s]+$/);
      var isAlphabet = regex.test(evt.key);
      var totalLength = this.el.nativeElement.value.length;
      if(totalLength>this.lengthOfName || !isAlphabet){
        evt.preventDefault();
      }

    }
}
