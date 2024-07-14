import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListadoComponent } from './listado/listado.component';


export const routes: Routes = [
    {path: '/examenfinal/', component: HomeComponent},
    {path: '/examenfinal/buscador', component: BuscadorComponent},
    {path: '/examenfinal/listado', component: ListadoComponent},
];

