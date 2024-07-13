import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  nombre :string = "";
  pokemon:any = {
    nombre : "",
    ataque : "",
    tipo : "",
    puntossalud : "",
    puntosdefensa : "",
    puntosvelocidad : "",
    puntosataque : "", 
    puntosdfespecial : "",
  }

  constructor(private http: HttpClient) {
    setTimeout(()=>
      console.log('a'),
    (2000)
  )
    console.log('b')
  }
  buscar() {
    let url = "https://pokeapi.co/api/v2/pokemon/"+this.nombre;
     this.http.get(url).subscribe((respuesta : any ) =>{
      console.log(respuesta);
      this.pokemon.nombre = respuesta.name;
      this.pokemon.tipo = respuesta.types[0].type.name;
      this.pokemon.ataque = respuesta.moves[0].move.name;
      this.pokemon.foto = respuesta.sprites.front_default;
      this.pokemon.ftespalda = respuesta.sprites.back_default;
      this.pokemon.puntossalud = respuesta.stats[0].base_stat;
      this.pokemon.puntosdefensa = respuesta.stats[2].base_stat;
      this.pokemon.puntosvelocidad = respuesta.stats[5].base_stat;
      this.pokemon.puntosataque = respuesta.stats[1].base_stat;
      this.pokemon.puntosdfespecial = respuesta.stats[4].base_stat;
      

      
     });
    
  }
}