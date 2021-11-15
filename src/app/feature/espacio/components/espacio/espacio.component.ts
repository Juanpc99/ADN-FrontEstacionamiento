import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../core/modelo/menu-item';
import { EspacioService } from '../../shared/service/espacio.service';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
})
export class EspacioComponent implements OnInit {

  public companies: MenuItem[] = [
    { url: '/espacio/', nombre: 'Espacios' },
    { url: '/espacio/ocupados', nombre: 'Ocupados' },
    { url: '/espacio/disponibles', nombre: 'Disponibles'}
    
  ];
  constructor(protected espacioService:EspacioService) { }

  ngOnInit(): void {
  }


}
