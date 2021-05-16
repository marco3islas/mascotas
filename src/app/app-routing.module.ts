import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ArticuloComponent} from './components/articulo/articulo.component';
import {BlogComponent} from './components/blog/blog.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {NofoundpageComponent} from './components/nofoundpage/nofoundpage.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'servicios', component: ServiciosComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'articulo/:id', component: ArticuloComponent},
    { path: 'buscar/:termino', component: BuscarComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', component: NofoundpageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
