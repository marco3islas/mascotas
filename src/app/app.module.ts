import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

    // Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
    // Componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { FormularioComentarioComponent } from './components/formulario-comentario/formulario-comentario.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

    // Servicios
import {MascotasService} from './services/mascotas.service';
import {CarouselService} from './services/carousel.service';
import {SharedModule} from './components/shared/shared.module';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NofoundpageComponent } from './components/nofoundpage/nofoundpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiciosComponent,
    BlogComponent,
    ArticuloComponent,
    FormularioComentarioComponent,
    ComentariosComponent,
    BuscarComponent,
    ContactoComponent,
    NofoundpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule
  ],
  providers: [
      MascotasService,
      CarouselService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
