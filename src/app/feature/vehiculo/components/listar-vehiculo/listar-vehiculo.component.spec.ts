import { ListarVehiculosComponent } from './listar-vehiculo.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { HttpService } from '../../../../core/services/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('ListarVehiculosComponent', () => {
    let component: ListarVehiculosComponent;
    let fixture: ComponentFixture<ListarVehiculosComponent>;
  
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
  