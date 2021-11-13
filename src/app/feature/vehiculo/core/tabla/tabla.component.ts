import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../../../shared/models/vehiculo';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() vehiculosO: Observable<Vehiculo[]>;

  constructor() { }

  ngOnInit(){};
  

}
