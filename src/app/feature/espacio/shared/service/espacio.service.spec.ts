import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { EspacioService } from './espacio.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../../../../core/services/http.service';
import { Espacio } from '@shared/models/espacio';
import { Vehiculo } from '../../../../shared/models/vehiculo';
import { HttpResponse } from '@angular/common/http';


describe('EspacioService', ()=>{
    let httpMock: HttpTestingController;
    let service: EspacioService;
    const apiEndpointEspacioConsultarPorEstadoDisponible = `${environment.endpoint}/espacio/D`;
    const apiEndpointEspacioConsultarPorEstadoOcupado = `${environment.endpoint}/espacio/O`;
    const apiEndpointEspacioConsultarTodo = `${environment.endpoint}/espacio`;
    const apiEndpointEspacioBuscarPorIdEspacio = `${environment.endpoint}/vehiculo/idEspacio/1`;
    const apiEndpointEspacioActualizarVehiculo = `${environment.endpoint}/vehiculo/1`;
    
    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [EspacioService, HttpService]
        });
        httpMock = injector.inject(HttpTestingController);
        service = TestBed.inject(EspacioService);
    });

    it('should be created', () => {
        const espacioService: EspacioService = TestBed.inject(EspacioService);
        expect(espacioService).toBeTruthy();
    });
    it('Deberia listar espacios disponibles', ()=>{
        const dumyEspacios = [
            new Espacio(1, 'A12', 'D'), 
            new Espacio(2, 'A13', 'D'), 
            new Espacio(3, 'A14', 'D'), 
        ];
        service.consultarPorEstado('D').subscribe(espacios => {
            expect(espacios.length).toBe(3);
            expect(espacios).toEqual(dumyEspacios);
        });
        const req = httpMock.expectOne(apiEndpointEspacioConsultarPorEstadoDisponible);
        expect(req.request.method).toBe('GET');
        req.flush(dumyEspacios);
    });
    it('Deberia listar espacios ocupados', ()=>{
        const dumyEspacios = [
            new Espacio(1, 'A12', 'O'), 
            new Espacio(2, 'A13', 'O'), 
            new Espacio(3, 'A14', 'O'), 
        ];
        service.consultarPorEstado('O').subscribe(espacios => {
            expect(espacios.length).toBe(3);
            expect(espacios).toEqual(dumyEspacios);
        });
        const req = httpMock.expectOne(apiEndpointEspacioConsultarPorEstadoOcupado);
        expect(req.request.method).toBe('GET');
        req.flush(dumyEspacios);
    });
    it('Deberia listar todos los espacios', ()=>{
        const dumyEspacios = [
            new Espacio(1, 'A12', 'O'), 
            new Espacio(2, 'A13', 'O'), 
            new Espacio(3, 'A14', 'D'), 
        ];
        service.consultarTodo().subscribe(espacios => {
            expect(espacios.length).toBe(3);
            expect(espacios).toEqual(dumyEspacios);
        });
        const req = httpMock.expectOne(apiEndpointEspacioConsultarTodo);
        expect(req.request.method).toBe('GET');
        req.flush(dumyEspacios);
    });
    
    it('Deberia buscar un vehiculo por el id espacio', ()=>{
        const dumyVehiculos = 
            new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000) 
        ;
        service.buscarPorIdEspacioVehiculo(1).subscribe(vehiculos => {
            expect(vehiculos).toEqual(dumyVehiculos);
            expect(vehiculos.placa).toEqual('ASD123')
        });
        const req = httpMock.expectOne(apiEndpointEspacioBuscarPorIdEspacio);
        expect(req.request.method).toBe('GET');
        req.flush(dumyVehiculos);
    });
    it('Deberia actualizar un vehiculo', ()=>{
        const dumyVehiculo =new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000);
        service.actualizarVehiculo(dumyVehiculo, 1).subscribe(data =>{
            expect(data).toEqual(true);
        });
        const req = httpMock.expectOne(apiEndpointEspacioActualizarVehiculo);
        expect(req.request.method).toBe('PUT');
        req.event(new HttpResponse<boolean>({body: true}));
    });
})