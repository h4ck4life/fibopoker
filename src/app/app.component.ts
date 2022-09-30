import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { EffectCards, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Fibopoker';
  isNumberBlur = false;
  fibonacciRange = [1, 2, 3, 5, 8, 13, 21, '?', '☕'];

  config: SwiperOptions = {
    loop: true,
    effect: 'cards',
  };

  toggleBlur() {
    if (this.isNumberBlur) {
      this.isNumberBlur = false;
    } else {
      this.isNumberBlur = true;
    }
  }
}
