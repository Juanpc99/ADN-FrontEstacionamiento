import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';



const routes: Routes = [
    {
        path: '',
        component: VehiculoComponent,

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class VehiculoRoutingModule{
}
