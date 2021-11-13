import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Espacio } from '../../../../shared/models/espacio';
import { EspacioService } from '../../shared/service/espacio.service';

@Component({
  selector: 'app-lista-espacios-ocupados',
  templateUrl: './lista-espacios-ocupados.component.html',
  styleUrls: ['./lista-espacios-ocupados.component.css']
})
export class ListaEspaciosOcupadosComponent implements OnInit {

  public listaOcupados: Observable<Espacio[]>;

  constructor(protected espacioService: EspacioService) { }

  
  ngOnInit() {

    this.listaOcupados = this.espacioService.consultarPorEstado('O');
    
  }
}
