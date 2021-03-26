import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

    // Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
    // Componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiciosComponent,
    BlogComponent,
    ArticuloComponent,
    FormularioComentarioComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
      MascotasService,
      CarouselService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
