import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComentarioComponent } from './formulario-comentario.component';

describe('FormularioComentarioComponent', () => {
  let component: FormularioComentarioComponent;
  let fixture: ComponentFixture<FormularioComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
