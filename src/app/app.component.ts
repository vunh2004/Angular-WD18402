import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CouterComponent } from './components/couter/couter.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CouterComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'WD18402';
}
