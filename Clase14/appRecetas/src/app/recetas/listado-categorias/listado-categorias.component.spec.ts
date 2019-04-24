import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCategoriasComponent } from './listado-categorias.component';

describe('ListadoCategoriasComponent', () => {
  let component: ListadoCategoriasComponent;
  let fixture: ComponentFixture<ListadoCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
