import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layouts-admin.component.html',
  styleUrl: './layouts-admin.component.css',
})
export class LayoutsAdminComponent {}
