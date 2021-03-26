import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ArticuloComponent} from './components/articulo/articulo.component';
import {BlogComponent} from './components/blog/blog.component';
import {HomeComponent} from './components/home/home.component';
import {ServiciosComponent} from './components/servicios/servicios.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'servicios', component: ServiciosComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'articulo/:id', component: ArticuloComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
