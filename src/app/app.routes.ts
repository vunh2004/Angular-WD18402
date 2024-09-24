import { Routes } from '@angular/router';
import { LayoutsWebsiteComponent } from './layouts/layouts-website/layouts-website.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutsAdminComponent } from './layouts/layouts-admin/layouts-admin.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsWebsiteComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },

      {
        path: 'home',
        component: ProductListComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: LayoutsAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];
