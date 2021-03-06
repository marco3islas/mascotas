import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Entradas, EntradasService} from 'src/app/services/entradas.service';
import {Mascotas, MascotasService} from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    mascotas: Mascotas[] = [];
    entradas: Entradas[] = [];

  constructor( private mascotaService: MascotasService,
               private entradasService: EntradasService,
               private router: Router
               ) { }

  ngOnInit(): void {

      this.mascotas = this.mascotaService.getMascotas();
      console.log( this.mascotas );

      this.entradas = this.entradasService.getEntradas();
      console.log(this.entradas);
  }
    verArticulo(idx: number){
      this.router.navigate(['/articulo', idx]);
    }

}
