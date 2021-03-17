import {Injectable} from '@angular/core';

@Injectable ({
    providedIn: 'root'
})

export class CarouselService {
    private carousel: Carousel  [] = [
        {
            titulo: 'Perro blanco alegre',
            imagen: 'assets/img/joe-hepburn-VH9girci2o4-unsplash.jpg',
        },
        {
            titulo: 'Perico azul sobre una piedra',
            imagen: 'assets/img/animals-3982182_640.jpg',
        },
        {
            titulo: 'Perro en sofa amarillo',
            imagen: 'assets/img/marcin-czerniawski-sxvy7ep2n9E-unsplash.jpg',
        },
    ];

    constructor(){
        console.log('Servicio para carousel Listo para usarse');
    }

    getCarousel(){
        return this.carousel;
    }
}

    export interface Carousel{
        titulo: string;
        imagen: string;
    }
