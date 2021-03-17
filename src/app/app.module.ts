import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

    // Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
    //Componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
    // Servicios
import {MascotasService} from './services/mascotas.service';
import {CarouselService} from './services/carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      MascotasService,
      CarouselService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
