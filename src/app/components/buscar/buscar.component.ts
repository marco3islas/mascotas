import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MascotasService} from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

    termino: string;
    mascota: any[] = [];
  constructor( private activateRoute: ActivatedRoute,
               private mascotasService: MascotasService) { }

  ngOnInit(): void {
      this.activateRoute.params.subscribe( params => {
          this.termino = params['termino'];
          this.mascota = this.mascotasService.buscarTermino(params['termino']);
          console.log('termino');
      });
  }

}
