import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SacarService } from './sacar.service';
import { HttpService } from '../../../../core/services/http.service';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../../../../shared/models/vehiculo';
import { HttpResponse } from '@angular/common/http';
describe('SacarService', () =>{
    let httpMock: HttpTestingController;
    let service : SacarService;

    const apiSacarBuscarVehiculoPorIdEspacio = `${environment.endpoint}/vehiculo/idEspacio/1`
    const apiSacarEliminarVehiculo = `${environment.endpoint}/vehiculo/1`
    beforeEach(() =>{
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SacarService, HttpService]
        });
        httpMock = injector.inject(HttpTestingController);
        service = TestBed.inject(SacarService);
    });

    it('should be created', () =>{
        const sacarService: SacarService = TestBed.inject(SacarService);
        expect(sacarService).toBeTruthy();
    });
    it('debe buscar por id esapcio', () =>{
        const dummyVehiculo = new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000);
        service.buscarPorIdEspacio(1).subscribe(vehiculo =>{
            expect(vehiculo).toEqual(dummyVehiculo);
        });
        const req = httpMock.expectOne(apiSacarBuscarVehiculoPorIdEspacio);
        expect(req.request.method).toBe('GET');
        req.flush(dummyVehiculo);
    });
    it('debe eliminar un vehiculo', () =>{
        let dummyVehiculo = new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000);
        dummyVehiculo.id = 1;
        service.eliminar(dummyVehiculo.id).subscribe((respuesta) =>{
            expect(respuesta).toEqual(true);
        });
        const req = httpMock.expectOne(apiSacarEliminarVehiculo);
        expect(req.request.method).toBe('DELETE');
        req.event(new HttpResponse<boolean>({body: true}));
    });
});