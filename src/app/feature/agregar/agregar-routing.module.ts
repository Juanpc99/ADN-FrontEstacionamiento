import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarVehiculoComponent } from './agregar-vehiculo/agregar-vehiculo.component';


const routes: Routes = [
    {
        path: ':id',
        component:AgregarVehiculoComponent
        
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgregarRoutingModule{
}
