import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor = "gray";
  pessoas: any[] = [
    {
      nome:'Jefferson',
      pais:'BR'
    },
    {
      nome:'Jefferson',
      pais:'USA'
    },
    {
      nome:'Chavez',
      pais:'CH'
    },
    {
      nome:'James',
      pais:'UK'
    },
    {
      nome:'Igor',
      pais:'US'
    }

  ];

  @HostBinding('style.backgroundColor') corDeFundo:string;

  @HostListener('focus') aoGanharFoco(){
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') aoPerderFoco(){
    this.corDeFundo = 'green';}

  /*constructor(private elementRef:ElementRef,
              private renderer:Renderer2 ) {
    this.renderer.setStyle(this.elementRef.nativeElement,
                          'background-color',
                          'yellow');
   }

   @HostListener('focus') noFoco(){
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color',
      'green');
   }

   @HostListener('blur') semFoco(){
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color',
      'brown');
   }*/
}
