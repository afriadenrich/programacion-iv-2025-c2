import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  // Obtener la referencia del elemento donde está el atributo de mi directiva.

  elemento = inject(ElementRef);

  color = input<string>('#ff0000');

  @HostListener('mouseenter')
  mouseEnter() {
    this.elemento.nativeElement.style.backgroundColor = this.color();
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.elemento.nativeElement.style.backgroundColor = '';
  }

  constructor() {
    // this.elemento.nativeElement.addEventListener('mouseenter', () => {
    //   this.elemento.nativeElement.style.backgroundColor = '#ff0000';
    // });
  }
}

// Clases para agregar lógica a nuestros elementos. Se instancian con atributos.

/*
.highlight:hover {
  background-color: #ff0000;
}
.highlight:hover {
  background-color: #0F0000;
}
.highlight:hover {
  background-color: #00FF00;
}
*/
