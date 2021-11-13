import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../shared/service/vehiculo.service';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../../../shared/models/vehiculo';


@Component({
    selector: 'app-listar-vehiculo',
    templateUrl: './listar-vehiculo.component.html',
    styleUrls: ['./listar-vehiculo.component.styles.css']
})
export class ListarVehiculosComponent implements OnInit{
    public listaVehiculos : Observable<Vehiculo[]>;

    constructor(protected vehiculoService: VehiculoService){}

    ngOnInit(){
    }
}