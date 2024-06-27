import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "hospital-root",
  standalone: true,
  imports: [RouterOutlet], // Importa RouterOutlet para manejar las rutas
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent { }
