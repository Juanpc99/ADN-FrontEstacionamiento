import { Component, OnInit } from '@angular/core';
import { EspacioService } from '../../shared/service/espacio.service';
import { Espacio } from '../../../../shared/models/espacio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-espacios',
  templateUrl: './lista-espacios.component.html',
  styleUrls: ['./lista-espacios.component.css']
})
export class ListaEspaciosComponent implements OnInit {

  public listaEspacios: Observable<Espacio[]>;
  

  constructor(protected espacioService: EspacioService) { }

  ngOnInit() {
    this.listaEspacios = this.espacioService.consultarTodo();
    
  }



}
