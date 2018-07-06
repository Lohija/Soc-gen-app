import {Directive,ElementRef,Input, HostListener, HostBinding} from '@angular/core';


@Directive({
    selector : '[appHighLight]'
})
export class HighLightDirective {

    @Input('mycolor') mycolor : string;
    @HostBinding('style.backgroundColor') bgcolor : any;
    
    @HostListener('mouseenter') mouseenter() {
     //   this.elementRef.nativeElement.style.backgroundColor = this.mycolor;
     this.bgcolor = this.mycolor;
    }
    @HostListener('mouseleave') mouseleave() {
        //this.elementRef.nativeElement.style.backgroundColor = 'transparent';
        this.bgcolor = 'transparent';
    }
    constructor(private elementRef: ElementRef){
        this.elementRef.nativeElement.style.backgroundColor = 'transparent';
 //        this.elementRef.nativeElement = "green";

    }
}