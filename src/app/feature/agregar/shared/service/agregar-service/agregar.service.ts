import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../../../../core/services/http.service';
import { Vehiculo } from '../../../../../shared/models/vehiculo';
import { Respuesta } from '../../../../../shared/models/respuesta';




@Injectable()
export class AgregarService { 
  constructor(protected http: HttpService){}


  public agregarCarro(vehiculo: Vehiculo){
    return this.http.doPost<Vehiculo, Respuesta>(`${environment.endpoint}/vehiculo`, vehiculo);
  }
}
