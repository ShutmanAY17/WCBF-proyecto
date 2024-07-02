import { Routes } from "@angular/router";
import { DescProductoComponent } from './pages/desc-producto/desc-producto.component';
import { PromoProductosComponent} from "./pages/promo-productos/promo-productos.component";
import { CommonModule } from '@angular/common';
import { CarritoComponent } from "./pages/carrito/carrito.component";
import {PerfilClienteComponent} from "./pages/perfil-cliente/perfil-cliente.component";
import { AnadirProductosComponent } from "./pages/anadir-productos/anadir-productos.component";
import { LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: 'anadir-productos', component:AnadirProductosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil-cliente', component: PerfilClienteComponent },
  { path: 'promo-productos', component: PromoProductosComponent },
  { path: 'carrito' , component: CarritoComponent },
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
