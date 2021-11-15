import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { HttpService } from '../../../../core/services/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { ListarVehiculosComponent } from '../listar-vehiculo/listar-vehiculo.component';
describe('ListarVehiculosComponent', () => {
    let component: VehiculoComponent;
    let fixture: ComponentFixture<VehiculoComponent>;
  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ListarVehiculosComponent ],
        providers:[VehiculoService, HttpService, HttpClient, HttpHandler]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ListarVehiculosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  