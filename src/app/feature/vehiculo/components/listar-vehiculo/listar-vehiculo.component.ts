import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../shared/service/vehiculo.service';


@Component({
    selector: 'app-listar-vehiculo',
    templateUrl: './listar-vehiculo.component.html',
})
export class ListarVehiculosComponent implements OnInit{

    constructor(protected vehiculoService: VehiculoService){}

    ngOnInit(){
    }
    
}
