import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

    private mascotas: Mascotas[] = [
        {
            titulo: 'El Labrador',
            imagen: 'assets/img/dog-2612083_640.jpg',
            descripcion: 'El Labrador es el perro que mas Ipsum saepe amet ut molestias consectetur, in placeat dolorem?',
        },
        {
            titulo: 'La Guacamaya Azul',
            imagen: 'assets/img/bird-4887736_640.jpg',
            descripcion: 'Una de las aves mas coloridas del mundo es La Guacamaya Azul que mas Ipsum saepe amet ut molestias consectetur, in placeat dolorem?',           
        },
        {
            titulo: 'Los cuidados de los gatos',
            imagen: 'assets/img/cats-205606_1280.jpg',
            descripcion: 'Los gatos domesticos tienen  que mas Ipsum saepe amet ut molestias consectetur, in placeat dolorem?',           
        }

    ];
  constructor() { 
      console.log('Servicio Listo para usarse');
  }

    getMascotas(){
        return this.mascotas;
    }
}

    export interface Mascotas{
        titulo: string;
        imagen: string;
        descripcion: string;
    }
