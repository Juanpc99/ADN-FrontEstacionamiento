import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacioComponent } from './components/espacio/espacio.component';
import { ListaEspaciosComponent } from './components/lista-espacios/lista-espacios.component';
import { ListaEspaciosOcupadosComponent } from './components/lista-espacios-ocupados/lista-espacios-ocupados.component';
import { ListaEspaciosDisponiblesComponent } from './components/lista-espacios-disponibles/lista-espacios-disponibles.component';

const routes: Routes = [
    {
        path: '',
        component:EspacioComponent,
        children: [
            {
                path: '',
                component: ListaEspaciosComponent
            },
            {
                path: 'ocupados',
                component: ListaEspaciosOcupadosComponent
            },
            {
                path: 'disponibles',
                component: ListaEspaciosDisponiblesComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspacioRoutingModule{
    
}