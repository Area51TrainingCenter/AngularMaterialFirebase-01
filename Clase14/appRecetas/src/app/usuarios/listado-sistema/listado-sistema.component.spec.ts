import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSistemaComponent } from './listado-sistema.component';

describe('ListadoSistemaComponent', () => {
  let component: ListadoSistemaComponent;
  let fixture: ComponentFixture<ListadoSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
