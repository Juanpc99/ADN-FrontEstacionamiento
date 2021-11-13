import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from '../../../../core/services/http.service';
import { Espacio } from '../../../../shared/models/espacio';
import { Vehiculo } from '../../../../shared/models/vehiculo';

@Injectable()
export class EspacioService {
    constructor(protected http: HttpService) {}

    public consultarPorEstado(estado: string) {
      return this.http.doGet<Espacio[]>(`${environment.endpoint}/espacio/${estado}`, this.http.optsName('consultar espacios'));
    }

    public consultarTodo() {
      return this.http.doGet<Espacio[]>(`${environment.endpoint}/espacio`, this.http.optsName('consultar espacios'));
    }
  
    public buscarPorIdEspacioVehiculo(id: number){
      return this.http.doGet<Vehiculo>(`${environment.endpoint}/vehiculo/idEspacio/${id}`);
    }
    public actualizarVehiculo(vehiculo: Vehiculo, id: number){
      return this.http.doPut<Vehiculo, boolean>(`${environment.endpoint}/vehiculo/${id}`, vehiculo);
  }
  
   
}