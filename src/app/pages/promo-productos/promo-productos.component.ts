import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NavbarComponent } from "../../components/navbar/navbar.component"; // Ruta al componente
import { CommonModule, DatePipe } from '@angular/common'; // Importa DatePipe
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-promo-productos',
  templateUrl: './promo-productos.component.html',
  styleUrls: ['./promo-productos.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, NavbarComponent],
  providers: [DatePipe] // Añade DatePipe aquí
})
export class PromoProductosComponent {
  codigoDescuento: string = '';
  fechaValidez: Date = new Date('2024-12-31');
  detallesUso: string = 'Este código de descuento se aplica a todos los productos de la tienda y no es combinable con otras promociones.';

  aplicarCodigoDescuento() {
    console.log('Código aplicado:', this.codigoDescuento);
  }
}
