import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { HttpService } from '../../../../core/services/http.service';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../../../../shared/models/vehiculo';
describe('VehiculoService', () => {
    let httpMock: HttpTestingController;
    let service: VehiculoService;

    const apiVehiculoCaonsultarPorPlaca = `${environment.endpoint}/vehiculo/A`
    const apiVehiculoConsultarTodo = `${environment.endpoint}/vehiculo`;
    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [VehiculoService, HttpService]
        });
        httpMock = injector.inject(HttpTestingController);
        service = TestBed.inject(VehiculoService);

    });
    it('should be created', (done) => {
        const vehiculoService: VehiculoService = TestBed.inject(VehiculoService);
        expect(vehiculoService).toBeTruthy;
        done();
    });
    it('debe buscar por placa', () => {
        const dummyVehiculo = [
            new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000),
            new Vehiculo('ASD124', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000),

        ];
        service.consultarPorPlaca('A').subscribe(vehiculo => {
            expect(vehiculo.length).toBe(2);
            expect(vehiculo).toEqual(dummyVehiculo);
        });
        const req = httpMock.expectOne(apiVehiculoCaonsultarPorPlaca);
        expect(req.request.method).toBe('GET');
        req.flush(dummyVehiculo);
    });

    it('debe consultar todos los vehiculos', () =>{
        const dummyvehiculos = [
            new Vehiculo('ASD123', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000),
            new Vehiculo('ASD124', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000),
            new Vehiculo('ASD126', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000),
            new Vehiculo('ASD129', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000),
            new Vehiculo('ASD120', 1, 'Carro', 'Moto', 'carlos', 'restrepo', '2021/10/10 12:15:15', '2021/10/10 12:15:15', 15000),
        ];
        service.consultar().subscribe(vehiculos => {
            expect(vehiculos.length).toBe(5);
            expect(vehiculos).toEqual(dummyvehiculos);
        });
        const req = httpMock.expectOne(apiVehiculoConsultarTodo);
        expect(req.request.method).toBe('GET');
        req.flush(dummyvehiculos);
    });

});