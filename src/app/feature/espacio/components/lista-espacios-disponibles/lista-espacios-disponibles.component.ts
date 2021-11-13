import { Component, OnInit } from '@angular/core';
import { Espacio } from '../../../../shared/models/espacio';
import { EspacioService } from '../../shared/service/espacio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-espacios-disponibles',
  templateUrl: './lista-espacios-disponibles.component.html',
  styleUrls: ['./lista-espacios-disponibles.component.css']
})
export class ListaEspaciosDisponiblesComponent implements OnInit {

  public listaDisponible: Observable<Espacio[]>;

  constructor(protected espacioService: EspacioService) { }

  
  ngOnInit() {

    this.listaDisponible = this.espacioService.consultarPorEstado('D');
    
  }


  
}
