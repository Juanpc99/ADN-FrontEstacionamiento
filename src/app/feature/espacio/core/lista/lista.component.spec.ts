import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { EspacioService } from '../../shared/service/espacio.service';
import { HttpService } from '../../../../core/services/http.service';
import { DatePipe } from '@angular/common';
import { Vehiculo } from '../../../../shared/models/vehiculo';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(
    waitForAsync( () => {
      TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        EspacioService,
        HttpService,
        DatePipe
      ]
      })
      .compileComponents();
    })
    )

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('actualizar vehiculo', () => {
    let dummyVehiculo = new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000);

    component.actualizar(dummyVehiculo.idEspacio);
    expect(component.actualizo).toBeFalse();
  });
});
