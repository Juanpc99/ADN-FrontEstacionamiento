import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { HttpService } from '../../../../core/services/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { InputComponent } from './input.component';
describe('Inputcomponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;
  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ InputComponent ],
        providers:[VehiculoService, HttpService, HttpClient, HttpHandler]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(InputComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('debe buscar', () => {
      spyOn(component.onEnter, 'emit');
      component.buscar();
      expect(component.onEnter.emit).toHaveBeenCalled();
    })
    it('debe actuar con tecla presionada', () => {
      spyOn(component.onDebounce, 'next');
      component.teclaPresionada();
      expect(component.onDebounce.next);
    })
  });
