import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

    private entradas: Entradas [] = [

        {
        titulo: 'Que aves son permitidas como mascotas?',
        subtitulo: 'Aves para tu familia',
        imagen: 'assets/img/bruce-hong-z18SwKMTJd8-unsplash.jpg',
        },
        {
        titulo: 'Gatos y sus costumbres',
        subtitulo: 'Como cuidar a tus gatos?',
        imagen: 'assets/img/nathan-riley-_ir1D49PRqM-unsplash.jpg'
        },
        {
        titulo: 'El beagle',
        subtitulo: 'Perros ideales para tu familia',
        imagen: 'assets/img/artem-beliaikin-yeFPQ7IdDfE-unsplash.jpg'
        },
        {
        titulo: 'Pericos ',
        subtitulo: 'El colorido de las aves',
        imagen: 'assets/img/parrots-1149970_640.jpg'
        },
        {
        titulo: 'Perros del Norte',
        subtitulo: 'Es conveniente tener perros del norte en lugares calidos?',
        imagen: 'assets/img/e-card-165217_1280.jpg'
        },
    ];

  constructor() { console.log('Servicio de entradas listo'); }
    getEntradas(){
     return this.entradas;
    }
}



export interface Entradas{
    titulo: string;
    subtitulo: string;
    imagen: string;
}
