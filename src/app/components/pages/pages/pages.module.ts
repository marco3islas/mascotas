import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutComponent} from './about/about.component';
import {ArticuloComponent} from './articulo/articulo.component';
import {BlogComponent} from './blog/blog.component';
import {ComentariosComponent} from './comentarios/comentarios.component';
import {ContactoComponent} from './contacto/contacto.component';
import {FormularioComentarioComponent} from './formulario-comentario/formulario-comentario.component';
import {HomeComponent} from './home/home.component';


@NgModule({
    declarations:[
        HomeComponent,
        AboutComponent,
        ComentariosComponent,
        BlogComponent,
        ArticuloComponent,
        ContactoComponent,
        FormularioComentarioComponent,
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        ComentariosComponent,
        BlogComponent,
        ArticuloComponent,
        ContactoComponent,
        FormularioComentarioComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PagesModule {}
