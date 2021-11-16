import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { HttpService } from '../../../../core/services/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TablaComponent } from './tabla.component';
describe('TablaComponent', () => {
    let component: TablaComponent;
    let fixture: ComponentFixture<TablaComponent>;  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ TablaComponent ],
        providers:[ VehiculoService, HttpService, HttpClient, HttpHandler ]
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TablaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });