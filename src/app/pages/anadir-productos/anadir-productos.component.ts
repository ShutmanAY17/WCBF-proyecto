import { Component } from '@angular/core';
import { NavbarLogoComponent } from "../../components/navbar-logo/navbar-logo.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FormsModule} from "@angular/forms";
@Component({
    selector: 'app-anadir-productos',
    standalone: true,
    imports: [FormsModule, NavbarLogoComponent],
    templateUrl: './anadir-productos.component.html',
    styleUrls: ['./anadir-productos.component.scss']
})
export class AnadirProductosComponent {
    producto = {
        imagen: '', // Aquí podrías manejar la URL de la imagen seleccionada si deseas previsualizarla
        nombre: '',
        precio: null,
        descripcion: ''
    };

    guardarProducto() {
        console.log('Producto guardado:', this.producto);
        // Aquí puedes agregar la lógica para enviar el producto al backend o realizar otras acciones necesarias
    }

    onFileChange(event: Event) {
        const fileInput = event.target as HTMLInputElement;
        const file = (fileInput.files as FileList)[0];
        console.log('Archivo seleccionado:', file);
        // Aquí puedes manejar la lógica para cargar la imagen y previsualizarla si lo deseas
    }
}
