import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EspacioService } from '../../shared/service/espacio.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpService } from '../../../../core/services/http.service';
import { ListaEspaciosComponent } from './lista-espacios.component';

describe('ListaEspaciosComponent', () => {
  let component: ListaEspaciosComponent;
  let fixture: ComponentFixture<ListaEspaciosComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ListaEspaciosComponent ],
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
    fixture = TestBed.createComponent(ListaEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
