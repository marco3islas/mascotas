import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ValidadoresService} from 'src/app/services/validadores.service';

@Component({
  selector: 'app-formulario-comentario',
  templateUrl: './formulario-comentario.component.html',
  styleUrls: ['./formulario-comentario.component.css']
})
export class FormularioComentarioComponent implements OnInit {

    forma: FormGroup;


  constructor( private formBuilder: FormBuilder,
               private validadores: ValidadoresService) {
      this.crearFormulario();
      this.cargarDataAlFormulario();
  }

  ngOnInit(): void {
  }

    get nombreNoValido (){
        return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
    }
    get correoNoValido(){
        return this.forma.get('email').invalid && this.forma.get('email').touched;
    }
    get urlNoValido(){
        return this.forma.get('url').invalid && this.forma.get('url').touched;
    }
    get comentarioNoValido(){
        return this.forma.get('comentario').invalid && this.forma.get('comentario').touched;
    }

    get pasatiempos(){
        return this.forma.get('pasatiempos') as FormArray;
    }

    crearFormulario(){

        this.forma = this.formBuilder.group({
            nombre: ['', [ Validators.required, Validators.minLength(5), this.validadores.noHerrera]],
            email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            url   : ['', [Validators.pattern('^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$')]],
            comentario   : ['', [Validators.required, Validators.minLength(5)]],
            pasatiempos: this.formBuilder.array([
            ])
        });

    }

    cargarDataAlFormulario(){
        this.forma.reset({
            nombre: '', 
            email: '',
            url: '',
            comentario: ''

        });
    }

    agregarPasatiempo(){
        this.pasatiempos.push( this.formBuilder.control(''));
    }

    borrarPasatiempo( i: number ){
        this.pasatiempos.removeAt(i);
    }

    submit(){
        console.log(this.forma);
        if (this.forma.invalid){
            return Object.values( this.forma.controls ).forEach( control => {
                control.markAsTouched();
            });
        }
    /* Posteo y reset de la inforacion */
        
        this.forma.reset({
            nombre: 'Sin nombre'
        });
    }
}
