import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color = 'blue';
  @HostBinding('style.borderColor') border = 'blue';

  constructor() { }
@HostListener('keyup') onKeyUp() {
this.color = this.getRandomColor();
this.border = this.getRandomColor();

}
 getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

}
