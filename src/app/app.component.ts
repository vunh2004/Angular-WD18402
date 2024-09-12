import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { People } from '../interfaces/people';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
