import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CommonModule,]
})
export class ListadoComponent {
  pokemons: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchPokemons();
  }

  fetchPokemons() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';
    this.http.get<any>(apiUrl).subscribe(data => {
      this.pokemons = data.results;
      // Fetch details for each Pokemon to get their images
      this.pokemons.forEach(pokemon => {
        this.http.get<any>(pokemon.url).subscribe(details => {
          pokemon.image = details.sprites.front_default;
        });
      });
    });
  }
}

