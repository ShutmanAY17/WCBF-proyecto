import { Component } from '@angular/core';
import {NavbarLogoComponent} from "../../components/navbar-logo/navbar-logo.component";

@Component({
  selector: 'hospital-login',
  standalone: true,
  imports: [
    NavbarLogoComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor() {}
}
