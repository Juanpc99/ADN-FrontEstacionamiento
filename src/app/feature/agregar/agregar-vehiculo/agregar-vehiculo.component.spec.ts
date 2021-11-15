import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVehiculoComponent } from './agregar-vehiculo.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarService } from '../shared/service/agregar-service/agregar.service';
import { HttpService } from '../../../core/services/http.service';
import { of } from 'rxjs';
import { Respuesta } from '../../../shared/models/respuesta';

describe('AgregarVehiculoComponent', () => {
  let component: AgregarVehiculoComponent;
  let fixture: ComponentFixture<AgregarVehiculoComponent>;
  let agregarService: AgregarService;

  beforeEach(waitForAsync(() => {
       TestBed.configureTestingModule({
        declarations: [ 
          AgregarVehiculoComponent 
        ],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule
        ],
        providers: [
          AgregarService,
          HttpService,
          DatePipe
        ]
      })
      .compileComponents();
    })
  ) 

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVehiculoComponent);
    component = fixture.componentInstance;
    agregarService = TestBed.inject(AgregarService);
    spyOn(agregarService, 'agregarCarro').and.returnValue(
      of(new Respuesta(48))
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario invalido cuando esta vacio', () => {
   expect(component.form.valid).toBeFalsy();
  });
  it('Registrar vehiculo', () =>{
    component.form.controls.placa.setValue('ASV123');
    component.form.controls.tipoVehiculo.setValue('Carro');
    component.form.controls.modeloVehiculo.setValue('Mazda');
    component.form.controls.nombrePropietario.setValue('Carlos');
    component.form.controls.apellidoPropietario.setValue('Rojas');
    component.form.controls.precioHora.setValue(15000);
    expect(component.form.valid).toBeTruthy();

    component.save();
    expect(component.hayError).toBeFalse;
    
  });
});
