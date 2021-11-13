import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../../../../core/services/http.service';
import { Espacio } from '../../../../../shared/models/espacio';
import { Vehiculo } from '../../../../../shared/models/vehiculo';




@Injectable()
export class AgregarService { 
  constructor(protected http: HttpService){}

  public consultarPorIdEspacio(id: number){
    return this.http.doGet<Espacio>(`${environment.endpoint}/espacio/buscar/${id}`, this.http.optsName('consultar espacio por id'));
  }

  public agregarCarro(vehiculo: Vehiculo){
    return this.http.doPost<Vehiculo, boolean>(`${environment.endpoint}/vehiculo`, vehiculo);
  }
}
