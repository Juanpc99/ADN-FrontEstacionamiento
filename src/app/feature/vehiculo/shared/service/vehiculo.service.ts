import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../../../core/services/http.service';
import { Vehiculo } from '../../../../shared/models/vehiculo';


@Injectable()
export class VehiculoService {
    constructor(protected http: HttpService){}
 
    public consultar(){
        return this.http.doGet<Vehiculo[]>(`${environment.endpoint}/vehiculo`, this.http.optsName('consultar vehiculos'));
    }
    
    public consultarPorPlaca(placa: string){
        return this.http.doGet<Vehiculo[]>(`${environment.endpoint}/vehiculo/${placa}`, this.http.optsName('consultar vehiculos por placa'));
    }
}