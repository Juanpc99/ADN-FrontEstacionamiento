import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../shared/service/vehiculo.service';


@Component({
    selector: 'app-listar-vehiculo',
    templateUrl: './listar-vehiculo.component.html',
    styleUrls: ['./listar-vehiculo.component.styles.css']
})
export class ListarVehiculosComponent implements OnInit{

    constructor(protected vehiculoService: VehiculoService){}

    ngOnInit(){
    }
}