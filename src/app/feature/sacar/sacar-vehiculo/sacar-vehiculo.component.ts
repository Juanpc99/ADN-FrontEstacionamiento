import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '@shared/models/vehiculo';

import { SacarService } from '../shared/service/sacar.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
  styleUrls: ['./sacar-vehiculo.component.css']
})
export class SacarVehiculoComponent implements OnInit {
  vehiculo: Vehiculo = new Vehiculo('', 0, '', '', '', '', '', '', 0);
  idEspacio: number;

  constructor(
    private router: Router, protected sacarService: SacarService, private activatedRoute : ActivatedRoute) { 
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
    console.log(this.vehiculo.id);
    this.sacarService.eliminar(this.vehiculo.id).subscribe((a) => {
      console.log(a);
      this.router.navigate(['']);
    },
    (error) => {
      console.log(error);
    });
  }

  
}
