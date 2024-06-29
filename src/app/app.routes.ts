import { Routes } from "@angular/router";
import { DescProductoComponent } from './pages/desc-producto/desc-producto.component';
import { PromoProductosComponent} from "./pages/promo-productos/promo-productos.component";
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: 'promo-productos', component: PromoProductosComponent },
  { path: 'desc-producto', component: DescProductoComponent },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard/home",
  },
  {
    path: "dashboard",
    children: [
      {
        path: "home",
        async loadComponent() {
          return (await import("./pages/home/home.component")).HomeComponent;
        },
      },
    ],
  },
  {
    path: "**",
    async loadComponent() {
      return (await import("./pages/errors/page-404/page-404.component")).Page404Component;
    },
  },
];
