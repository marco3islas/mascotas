import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    private blog: Blog[] = [
        {
            imagen: 'assets/img/dog-2612083_640.jpg',
            titulo: 'El Labrador',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/bird-4887736_640.jpg',
            titulo: 'Guacamaya Azul',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/cats-205606_1280.jpg',
            titulo: 'Los Gatos Domesticos',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/cat-2934720_640.jpg',
            titulo: 'Gato sentado',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/friends-1149841_640.jpg',
            titulo: 'Gato y perro jugando en el jardin',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/cat-551554_640.jpg',
            titulo: 'Gatatito blanco asomandose',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/dog-3071334_640.jpg',
            titulo: 'Perro cafe con mirada expectante',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/cat-3535404_640.jpg',
            titulo: 'Tres gatitos explorando',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/cat-1246659_640.jpg',
            titulo: 'Gato cafe con ojos verdes y mirada intensa',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/sheepshead-3742999_640.jpg',
            titulo: 'Cabra bebe con cuernos',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/guinea-pig-242520_640.jpg',
            titulo: 'Cerdito de guinea o Cuyo',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/rabbit-373691_640.jpg',
            titulo: 'Conejito amarillo',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/adorable-1845789_640.jpg',
            titulo: 'Gatito azul',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/adorable-3344414_640.jpg',
            titulo: 'Perro con niño',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/bulldog-1047518_640.jpg',
            titulo: 'Bulldog negro',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/jay-wennington-CdK2eYhWfQ0-unsplash.jpg',
            titulo: 'Perro blanco y perro negro',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/lucas-ludwig-CMnikGdcIjo-unsplash.jpg',
            titulo: 'Golden contento',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/alexis-chloe-dD75iU5UAU4-unsplash.jpg',
            titulo: 'Perro y gato asomados a la ventana',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/vitamina-poleznova-2lVDdshknXI-unsplash.jpg',
            titulo: 'Perrito pastor aleman',
            autor: 'Marco Islas',
        },
        {
            imagen: 'assets/img/mascotasImg/tran-mau-tri-tam--81lVsfM4gQ-unsplash.jpg',
            titulo: 'Gatito con cara de asombro',
            autor: 'Marco Islas',
        },

    ];

  constructor() { }
    getBlog(){
        return this.blog;
    }

    getArticulo(idx: string){
        return this.blog[idx];
    }
}
export interface Blog{
    imagen: string;
    titulo: string;
    autor: string;
}
