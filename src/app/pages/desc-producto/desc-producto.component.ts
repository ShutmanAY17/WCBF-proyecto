import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {NavbarLogoComponent} from "../../components/navbar-logo/navbar-logo.component";

@Component({
    selector: 'app-desc-producto',
    templateUrl: './desc-producto.component.html',
    styleUrls: ['./desc-producto.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, RouterOutlet, NavbarComponent, NavbarLogoComponent]  // Asegúrate de importar FormsModule y CommonModule
})
export class DescProductoComponent {
    producto = {
        imagen: 'assets/images/blusaazul.png',
        nombre: 'Nombre del Producto',
        precio: 99.99,
        descripcion: 'Esta es una breve descripción del producto. Aquí se pueden destacar las características y beneficios del producto.',
        calificacion: 4.5 // Calificación promedio del producto
    };

    cantidad: number = 1;

    comentarios = [
        { calificacion: 5, texto: '¡Excelente producto, superó mis expectativas!' },
        { calificacion: 4, texto: 'Buena calidad, pero podría mejorar en algunos aspectos.' },
        { calificacion: 3, texto: 'Aceptable por el precio, pero no es exactamente lo que esperaba.' }
    ];

    incrementarCantidad() {
        this.cantidad++;
    }

    decrementarCantidad() {
        if (this.cantidad > 1) {
            this.cantidad--;
        }
    }

    anadirAlCarrito() {
        console.log('Producto añadido al carrito:', this.producto, 'Cantidad:', this.cantidad);
    }

    getStarClass(star: number, calificacion?: number): string {
        calificacion = calificacion || this.producto.calificacion;
        if (calificacion >= star) {
            return 'fas fa-star'; // Filled star
        } else if (calificacion >= star - 0.5) {
            return 'fas fa-star-half-alt'; // Half-filled star
        } else {
            return 'far fa-star'; // Empty star
        }
    }
}
