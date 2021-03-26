import { Component, OnInit } from '@angular/core';
import {GaleriaService, Galeria} from 'src/app/services/galeria.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

    galeria: Galeria[] = [];

  constructor( private galeriaService: GaleriaService) { }

  ngOnInit(): void {
     this.galeria = this.galeriaService.getGaleria();
     console.log(this.galeria);
  }

}
