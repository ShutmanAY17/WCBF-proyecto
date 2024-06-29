import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-navbar-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.scss']
})
export class NavbarLogoComponent {
  // Puedes añadir lógica aquí si es necesario
}
