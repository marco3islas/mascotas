import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './components/shared/shared.module';

    // Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
    // Componentes
import { BuscarComponent } from './components/buscar/buscar.component';
import { NofoundpageComponent } from './components/nofoundpage/nofoundpage.component';

    // Servicios
import {MascotasService} from './services/mascotas.service';
import {CarouselService} from './services/carousel.service';
import {PagesModule} from './components/pages/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    NofoundpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      PagesModule,
      SharedModule
  ],
  providers: [
      MascotasService,
      CarouselService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
