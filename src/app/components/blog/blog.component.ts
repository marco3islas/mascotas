import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BlogService, Blog} from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    blog: Blog[] = [];

  constructor( private blogService: BlogService,
               private router: Router
            ) { }
     

  ngOnInit(): void {
      this.blog = this.blogService.getBlog();
  }

    verArticulo(idx: number){
      this.router.navigate(['/articulo', idx]);
    }

}
