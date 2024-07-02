import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NavbarLogoComponent} from "../../components/navbar-logo/navbar-logo.component";

interface Producto {
  imagen: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule, NavbarLogoComponent, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  carrito: Producto[] = [
    { imagen: 'assets/images/producto1.jpg', nombre: 'Camisa de Algodón', precio: 50, cantidad: 2 },
    { imagen: 'assets/images/producto2.jpg', nombre: 'Pantalones Vaqueros', precio: 75, cantidad: 1 },
    { imagen: 'assets/images/producto3.jpg', nombre: 'Zapatos Deportivos', precio: 100, cantidad: 1 }
  ];

  decrementarCantidad(item: Producto) {
    if (item.cantidad > 1) {
      item.cantidad--;
    }
  }

  incrementarCantidad(item: Producto) {
    item.cantidad++;
  }

  eliminarDelCarrito(item: Producto) {
    this.carrito = this.carrito.filter(i => i !== item);
  }

  calcularSubtotal(item: Producto): number {
    return item.precio * item.cantidad;
  }

  calcularTotal() {
    return this.carrito.reduce((acc, item) => acc + this.calcularSubtotal(item), 0);
  }
}
