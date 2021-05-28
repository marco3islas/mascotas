import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuscarComponent} from './components/buscar/buscar.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {NofoundpageComponent} from './components/nofoundpage/nofoundpage.component';
import {HomeComponent} from './components/pages/pages/home/home.component';
import {AboutComponent} from './components/pages/pages/about/about.component';
import {BlogComponent} from './components/pages/pages/blog/blog.component';
import {ContactoComponent} from './components/pages/pages/contacto/contacto.component';
import {ArticuloComponent} from './components/pages/pages/articulo/articulo.component';

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
