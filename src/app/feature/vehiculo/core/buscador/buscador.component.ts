import { Component, OnInit } from '@angular/core';

import { Vehiculo } from '../../../../shared/models/vehiculo';
import { VehiculoService } from '../../shared/service/vehiculo.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit{

  termino = '';
  vehiculos: Vehiculo[] = [];
  todosVehiculos: Vehiculo[] = [];
  hayError = false;
  constructor(private vehiculoService: VehiculoService) {
    
   }

  buscar(termino:string){
    this.termino = termino;
    this.hayError = false;
    this.vehiculoService.consultarPorPlaca(this.termino)
      .subscribe((vehiculos) => {
        this.vehiculos = vehiculos;
        if(vehiculos.length === 0){
          this.hayError = true;
        }
      });
  }
  ngOnInit(){
    this.metodo();
  }
  sugerencias(termino){
    this.termino = termino;
  }

  metodo(){
    this.vehiculoService.consultar().subscribe((vehiculos) => {
      this.todosVehiculos = vehiculos;
    });
  }
}
