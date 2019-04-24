import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPortalComponent } from './listado-portal.component';

describe('ListadoPortalComponent', () => {
  let component: ListadoPortalComponent;
  let fixture: ComponentFixture<ListadoPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
