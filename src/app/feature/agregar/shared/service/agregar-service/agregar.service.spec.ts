import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { AgregarService } from './agregar.service';
import { Vehiculo } from '../../../../../shared/models/vehiculo';


describe('AgregarService', () => {
    let httpMock: HttpTestingController;
    let service: AgregarService;
    const apiEmdPointAgregar = `${environment.endpoint}/vehiculo`

    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AgregarService, HttpService]
        });
        httpMock = injector.inject(HttpTestingController);
        service= TestBed.inject(AgregarService);
    });

    it('should be created', () => {
        const productService: AgregarService = TestBed.inject(AgregarService);
        expect(productService).toBeTruthy();
      });


    it('deberia crear un vehiculo', () => {
        const dummyVehiculo = new Vehiculo('LÑP009', 10, 'Carro', 'Mazda 2010', 'Juan', 'Caro', '2021/10/10 12:52:23', '2021/10/10 12:52:23', 155);
        service.agregarCarro(dummyVehiculo).subscribe((respuesta: boolean) => {
            expect(respuesta).toBe(true);
        });
        
        const req = httpMock.expectOne(apiEmdPointAgregar);
        expect(req.request.method).toBe('POST');
        req.event(new HttpResponse<boolean>({body: true}));
    });
})