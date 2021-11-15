import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EspacioService } from '../../shared/service/espacio.service';

import { EspacioComponent } from './espacio.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpService } from '../../../../core/services/http.service';

describe('EspacioComponent', () => {
  let component: EspacioComponent;
  let fixture: ComponentFixture<EspacioComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ EspacioComponent ],
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
    fixture = TestBed.createComponent(EspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
