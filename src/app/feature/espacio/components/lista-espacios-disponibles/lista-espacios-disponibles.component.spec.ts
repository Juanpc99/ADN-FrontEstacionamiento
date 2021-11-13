import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspaciosDisponiblesComponent } from './lista-espacios-disponibles.component';

describe('ListaEspaciosDisponiblesComponent', () => {
  let component: ListaEspaciosDisponiblesComponent;
  let fixture: ComponentFixture<ListaEspaciosDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEspaciosDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspaciosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
