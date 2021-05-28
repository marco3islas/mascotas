import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';



@NgModule({
  declarations: [
      NavbarComponent,
      FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
