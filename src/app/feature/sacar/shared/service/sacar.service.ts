import { Injectable } from '@angular/core';
import { Vehiculo } from '@shared/models/vehiculo';
import { environment } from 'src/environments/environment';
import { HttpService } from '../../../../core/services/http.service';

@Injectable()
export class SacarService{
    constructor(protected http: HttpService){}

    public eliminar(id: number){
        return this.http.doDelete<boolean>(`${environment.endpoint}/vehiculo/${id}`);
    }
    public buscarPorIdEspacio(id: number){
        return this.http.doGet<Vehiculo>(`${environment.endpoint}/vehiculo/idEspacio/${id}`);
    }

}
