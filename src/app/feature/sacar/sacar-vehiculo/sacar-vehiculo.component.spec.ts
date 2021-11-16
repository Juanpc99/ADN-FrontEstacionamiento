import { ComponentFixture, TestBed, waitForAsync, inject } from '@angular/core/testing';

import { SacarVehiculoComponent } from './sacar-vehiculo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SacarService } from '../shared/service/sacar.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Vehiculo } from '../../../shared/models/vehiculo';
import { Router } from '@angular/router';

describe('SacarVehiculoComponent', () => {
  let component: SacarVehiculoComponent;
  let fixture: ComponentFixture<SacarVehiculoComponent>;
  let sacarService: SacarService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SacarVehiculoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        SacarService,
        HttpService,

      ]
    })
      .compileComponents();
  })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarVehiculoComponent);
    component = fixture.componentInstance;
    sacarService = TestBed.inject(SacarService);
    spyOn(sacarService, 'buscarPorIdEspacio').and.returnValue(
      of(new Vehiculo('ASD123', 1, 'Carro', 'fsdf', 'Camilo', 'Resr', '2021-10-10 12:12:12', '2021-10-10 12:12:12', 125))
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe eliminar un vehiculo', inject([Router],(router: Router) =>{
    component.eliminarVehiculo();
    spyOn(router, 'navigate').and.stub();
    expect(sacarService.eliminar).toBeTruthy;
    
    expect(component.hayError).toBeFalse;


  }))
});
