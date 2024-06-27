import { Component } from '@angular/core';

@Component({
  selector: 'app-desc-producto',
  templateUrl: './desc-producto.component.html',
  styleUrls: ['./desc-producto.component.scss'],
  standalone: true
})
export class DescProductoComponent {
  producto = {
    imagen: 'assets/images/producto-ejemplo.png',
    nombre: 'Nombre del Producto',
    precio: 99.99,
    descripcion: 'Esta es una breve descripción del producto. Aquí se puede destacar las características y beneficios del producto.'
  };

  anadirAlCarrito() {
    console.log('Producto añadido al carrito:', this.producto);
  }
}
