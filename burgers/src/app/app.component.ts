import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currency = '$';

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData = [
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    },
    {
      image: 'productsBurger.png',
      title: 'Бургер чеддер & бекон',
      text: ' Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price : 8,
      basePrice: 8,
      grams: 360,
    }
  ];

  constructor(private fb: FormBuilder) {

  }

  scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: 'smooth'})
  }

  confirmOrder() {
    if(this.form.valid) {
      alert('Спасибо вам за заказ! Мы скоро свяжемся с вами')
      this.form.reset();
    }
  }

  changeCurrency() {

    let newCurrency = '$'
    let coefficient = 1;

    if (this.currency === "$") {
        newCurrency = 'P';
        coefficient = 80;
    } else if(this.currency === 'P') {
        newCurrency = 'BYN';
        coefficient = 3;
    } else if (this.currency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (this.currency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice* coefficient).toFixed(1);
    })
  }
}
