import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '@shared/models/vehiculo';

import { SacarService } from '../shared/service/sacar.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
})
export class SacarVehiculoComponent implements OnInit {
  vehiculo: Vehiculo = new Vehiculo('', 0, '', '', '', '', '', '', 0);
  idEspacio: number;
  hayError = false;
  elimino = false;
  constructor(
     protected sacarService: SacarService, private activatedRoute : ActivatedRoute) { 
  }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params => {
      this.idEspacio = params.id;
    });
    this.sacarService.buscarPorIdEspacio(this.idEspacio)
    .subscribe((vehiculo) => {
      this.vehiculo = vehiculo;
    });

   
  }

  eliminarVehiculo(){
    this.hayError = false;
    this.elimino = false;
    this.sacarService.eliminar(this.vehiculo.id).subscribe(() => {
      this.elimino = true;
    },
    () => {
      this.hayError= true;
    });
  }

  
}
