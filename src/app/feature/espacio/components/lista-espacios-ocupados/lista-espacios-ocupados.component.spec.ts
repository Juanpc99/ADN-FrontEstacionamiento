
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EspacioService } from '../../shared/service/espacio.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpService } from '../../../../core/services/http.service';
import { ListaEspaciosOcupadosComponent } from './lista-espacios-ocupados.component';

describe('ListaEspaciosOcupadosComponent', () => {
  let component: ListaEspaciosOcupadosComponent;
  let fixture: ComponentFixture<ListaEspaciosOcupadosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ListaEspaciosOcupadosComponent ],
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
    fixture = TestBed.createComponent(ListaEspaciosOcupadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});