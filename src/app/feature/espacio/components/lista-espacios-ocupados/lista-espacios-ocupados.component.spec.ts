import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspaciosOcupadosComponent } from './lista-espacios-ocupados.component';

describe('ListaEspaciosOcupadosComponent', () => {
  let component: ListaEspaciosOcupadosComponent;
  let fixture: ComponentFixture<ListaEspaciosOcupadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEspaciosOcupadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspaciosOcupadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
