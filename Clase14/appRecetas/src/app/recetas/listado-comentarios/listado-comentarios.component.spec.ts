import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComentariosComponent } from './listado-comentarios.component';

describe('ListadoComentariosComponent', () => {
  let component: ListadoComentariosComponent;
  let fixture: ComponentFixture<ListadoComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
