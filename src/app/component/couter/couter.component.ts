import { Component } from '@angular/core';

@Component({
  selector: 'app-couter',
  standalone: true,
  imports: [],
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.css',
})
export class CouterComponent {
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  increase(value: number) {
    this.count += value;
  }
}
