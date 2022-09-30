import { Component, ViewEncapsulation } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

// import Swiper core and required modules
import SwiperCore, { EffectCards, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

enum CardType {
  Fibonacci = 'Fibonacci',
  ShirtSize = 'ShirtSize',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Fibopoker';
  isNumberBlur = false;
  fibonacciRange: any = [1, 2, 3, 5, 8, 13, 21, '?', '☕'];

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

  toggleCardType(cardType: string) {
    switch (cardType) {
      case CardType.Fibonacci: {
        this.fibonacciRange = [1, 2, 3, 5, 8, 13, 21, '?', '☕'];
        break;
      }
      case CardType.ShirtSize: {
        this.fibonacciRange = ['XS', 'S', 'M', 'L', 'XL', '?', '☕'];
        break;
      }
    }
  }
}
