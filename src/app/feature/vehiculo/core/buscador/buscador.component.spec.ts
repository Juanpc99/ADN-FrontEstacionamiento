import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuscadorComponent } from './buscador.component';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { of } from 'rxjs';
import { Vehiculo } from '../../../../shared/models/vehiculo';

describe('BuscadorComponent', () => {
  let component: BuscadorComponent;
  let fixture: ComponentFixture<BuscadorComponent>;
  let buscarService: VehiculoService;
  let spy;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [VehiculoService, HttpService],
    })
    .compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorComponent);
    component = fixture.componentInstance;
    buscarService = TestBed.inject(VehiculoService);
    spy = spyOn(buscarService, 'consultar').and.returnValue(
        of([new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000)])
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe buscar vehiculo por placa', () => {
    spy = spyOn(buscarService, 'consultarPorPlaca').and.returnValue(
        of([new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000)])
    )
    component.buscar('A');
    buscarService.consultarPorPlaca('A')
    expect(component.hayError).toBe(false);
    expect(spy).toHaveBeenCalled()
  });

  it('debe consultar todos los vehiculos', ()=> {
    component.metodo();
    expect(spy).toHaveBeenCalledWith();
  })
  it('sugerencias debe ser igual al termino', () => {
    component.sugerencias('hola');
    expect(component.termino).toEqual('hola');
  });
});

