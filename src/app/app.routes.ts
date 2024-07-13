import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListadoComponent } from './listado/listado.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'buscador', component: BuscadorComponent},
    {path: 'listado', component: ListadoComponent},
];

