import { NgModule } from '@angular/core';
import { VehiculoService } from './shared/service/vehiculo.service';
import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ListarVehiculosComponent } from './components/listar-vehiculo/listar-vehiculo.component';
import { BuscadorComponent } from './core/buscador/buscador.component';
import { InputComponent } from './core/input/input.component';
import { TablaComponent } from './core/tabla/tabla.component';
import { RouterModule } from '@angular/router';


@NgModule({

    declarations: [
        VehiculoComponent,
        ListarVehiculosComponent,
        BuscadorComponent,
        InputComponent,
        TablaComponent
    ],
    imports: [
        VehiculoRoutingModule,
        SharedModule,
        RouterModule
    ],
    providers: [
        VehiculoService
    ]
})
export class VehiculoModule {
}
