import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from 'src/app/services/blog.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent{

    articulo: any = {
   };

  constructor( private activatedRoute: ActivatedRoute,
               private blog: BlogService) {
    this.activatedRoute.params.subscribe( params => {
        this.articulo = this.blog.getArticulo(params['id']); 
  });
 }
}
