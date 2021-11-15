import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Espacio } from '../../../../shared/models/espacio';
import { EspacioService } from '../../shared/service/espacio.service';
import { Vehiculo } from '../../../../shared/models/vehiculo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {

  @Input() listaEspacios: Observable<Espacio[]>;
  actualizo = false;
  constructor(protected espacioService: EspacioService, private datePipe: DatePipe) { }

  ngOnInit(): void {

  }

  actualizar(id: number){
    this.actualizo = false;
    this.espacioService.buscarPorIdEspacioVehiculo(id).subscribe((vehiculo) => {
    let fechaSalida = this.datePipe.transform(Date.now().toString(), 'yyy-MM-dd HH:mm:ss');
    let vehiculos: Vehiculo = new Vehiculo(vehiculo.placa, vehiculo.idEspacio,
      vehiculo.tipoVehiculo, vehiculo.modeloVehiculo, vehiculo.nombrePropietario,
      vehiculo.apellidoPropietario, vehiculo.fechaEntrada, fechaSalida, vehiculo.precioBaseHora);
    this.espacioService.actualizarVehiculo(vehiculos, vehiculo.id).subscribe(() =>{
      this.actualizo =true;
      });
    });
  }
  

}
