import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { People } from '../interfaces/people';
import { Product } from '../interfaces/Product';
import { CouterComponent } from './component/couter/couter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CouterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'WD18402';
  student: {
    fullName: string;
    img: string;
    gender: 'Male' | 'FeMale';
    adddress: string;
    age: number;
    avgScrope: number;
  } = {
    fullName: 'Nguyễn Hoàng Vũ',
    img: 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi16-4.jpg',
    gender: 'Male',
    adddress: 'Bắc Giang',
    age: 20,
    avgScrope: 8,
  };

  //Bài 1 Lab 1
  people: People[] = [
    { id: 1, first: 'Minh', last: 'Hồ Chí', year: 1890, passed: 1969 },
    { id: 2, first: 'Giáp', last: 'Võ Nguyên', year: 1911, passed: 2013 },
    { id: 3, first: 'Trọng', last: 'Nguyễn Phú', year: 1944, passed: 2024 },
  ];

  ngOnInit() {
    this.render((innerHTML: string) => {
      this.show(innerHTML);
    });
  }

  show(innerHTML: string) {
    document.querySelector('#people')!.innerHTML = innerHTML;
  }
  render(callback: (html: string) => void) {
    let innerHTML = this.people
      .map((person) => {
        console.log(person);
        return `<tr>
        <td class="rol">${person.id}</td>
        <td class="rol">${person.first}</td>
        <td class="rol">${person.last}</td>
        <td class="rol">${person.year}</td>
        <td class="rol">${person.passed}</td>
        </tr>`;
      })
      .join('');
    callback(innerHTML);
  }

  //Bài 2 Lab 1
  product: Product[] = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      rating: 4.69,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      rating: 4.44,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      rating: 4.09,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      rating: 4.3,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    },
  ];
}
