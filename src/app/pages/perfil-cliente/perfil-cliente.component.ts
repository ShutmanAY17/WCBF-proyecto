import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { NavbarLogoComponent } from "../../components/navbar-logo/navbar-logo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'hospital-perfil-cliente',
  standalone: true,
  imports: [NavbarComponent, FormsModule, NavbarLogoComponent],
  templateUrl: './perfil-cliente.component.html',
  styleUrl: './perfil-cliente.component.scss'

})
// customer-profile.component.ts
export class PerfilClienteComponent {
  nombre: string = 'Nombre del Cliente';
  direccion: string = 'Dirección del Cliente';
  telefono: string = 'Teléfono del Cliente';
  correo: string = 'correo@example.com';
  profileImageUrl: string = 'assets/images/default-profile.png'; // Ruta de la imagen de perfil

  cambiarFotoPerfil() {
    // Implementa lógica para cambiar la foto de perfil
    console.log('Cambiar foto de perfil');
  }

  actualizarPerfil() {
    // Implementa lógica para actualizar la información del perfil
    console.log('Actualizar perfil');
  }
}
