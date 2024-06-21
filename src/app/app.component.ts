import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from "./components/pokemon/pokemon.component";

// The @Component Decorator marks this file as a component
@Component({
    // The components tag name, <app-root></app-root>
    selector: 'app-root',
    // Marking a component as standalone, makes it so that it handles it's own dependency's
    standalone: true,
    // The file paths to the template and stylesheet
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PokemonComponent]
})


export class AppComponent {
  title = 'Jacob';
}
