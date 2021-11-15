import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';
const routes: Routes = [
    {
        path: ':id',
        component:SacarVehiculoComponent
        
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SacarRoutingModule{}