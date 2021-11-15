
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EspacioService } from '../../shared/service/espacio.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpService } from '../../../../core/services/http.service';
import { ListaEspaciosDisponiblesComponent } from './lista-espacios-disponibles.component';

describe('ListaEspaciosDisponiblesComponent', () => {
  let component: ListaEspaciosDisponiblesComponent;
  let fixture: ComponentFixture<ListaEspaciosDisponiblesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ListaEspaciosDisponiblesComponent ],
        providers: [
          EspacioService,
          HttpClient,
          HttpService,
          HttpHandler
        ]
      })
      .compileComponents();
    }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspaciosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});