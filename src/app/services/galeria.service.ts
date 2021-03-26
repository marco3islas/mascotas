import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

    private galeria: Galeria[] = [
        {
            imagen: 'assets/img/mascotasImg/cat-2934720_640.jpg',
            titulo: 'Gato sentado'
        },
        {
            imagen: 'assets/img/mascotasImg/friends-1149841_640.jpg',
            titulo: 'Gato y perro jugando en el jardin',
        },
        {
            imagen: 'assets/img/mascotasImg/cat-551554_640.jpg',
            titulo: 'Gatatito blanco asomandose',
        },
        {
            imagen: 'assets/img/mascotasImg/dog-3071334_640.jpg',
            titulo: 'Perro cafe con mirada expectante',
        },
        {
            imagen: 'assets/img/mascotasImg/cat-3535404_640.jpg',
            titulo: 'Tres gatitos explorando',
        },
        {
            imagen: 'assets/img/mascotasImg/cat-1246659_640.jpg',
            titulo: 'Gato cafe con ojos verdes y mirada intensa',
        },
        {
            imagen: 'assets/img/mascotasImg/sheepshead-3742999_640.jpg',
            titulo: 'Cabra bebe con cuernos',
        },
        {
            imagen: 'assets/img/mascotasImg/guinea-pig-242520_640.jpg',
            titulo: 'Cerdito de guinea o Cuyo',
        },
        {
            imagen: 'assets/img/mascotasImg/rabbit-373691_640.jpg',
            titulo: 'Conejito amarillo',
        },
        {
            imagen: 'assets/img/mascotasImg/adorable-1845789_640.jpg',
            titulo: 'Gatito azul',
        },
        {
            imagen: 'assets/img/mascotasImg/adorable-3344414_640.jpg',
            titulo: 'Perro con niño',
        },
        {
            imagen: 'assets/img/mascotasImg/bulldog-1047518_640.jpg',
            titulo: 'Bulldog negro',
        },
        {
            imagen: 'assets/img/mascotasImg/jay-wennington-CdK2eYhWfQ0-unsplash.jpg',
            titulo: 'Perro blanco y perro negro',
        },
        {
            imagen: 'assets/img/mascotasImg/lucas-ludwig-CMnikGdcIjo-unsplash.jpg',
            titulo: 'Golden contento',
        },
        {
            imagen: 'assets/img/mascotasImg/alexis-chloe-dD75iU5UAU4-unsplash.jpg',
            titulo: 'Perro y gato asomados a la ventana',
        },
        {
            imagen: 'assets/img/mascotasImg/vitamina-poleznova-2lVDdshknXI-unsplash.jpg',
            titulo: 'Perrito pastor aleman',
        },
        {
            imagen: 'assets/img/mascotasImg/tran-mau-tri-tam--81lVsfM4gQ-unsplash.jpg',
            titulo: 'Gatito con cara de asombro',
        },
    ];

  constructor() { }
    getGaleria(){
     return this.galeria;
    }
}

export interface Galeria{
    imagen: string;
    titulo: string;
}
