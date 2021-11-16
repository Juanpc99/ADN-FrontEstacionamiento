import { NgModule } from '@angular/core';
import { EspacioComponent } from './components/espacio/espacio.component';
import { SharedModule } from '@shared/shared.module';
import { EspacioService } from './shared/service/espacio.service';
import { ListaEspaciosComponent } from './components/lista-espacios/lista-espacios.component';
import { ListaEspaciosDisponiblesComponent } from './components/lista-espacios-disponibles/lista-espacios-disponibles.component';
import { ListaEspaciosOcupadosComponent } from './components/lista-espacios-ocupados/lista-espacios-ocupados.component';
import { EspacioRoutingModule } from './espacio-routing.module';
import { ListaComponent } from './core/lista/lista.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    EspacioComponent,
    ListaEspaciosComponent,
    ListaEspaciosDisponiblesComponent,
    ListaEspaciosOcupadosComponent,
    ListaComponent
  ],
  imports: [
    EspacioRoutingModule,
    SharedModule,
  ],
  providers: [
    EspacioService,
    DatePipe
  ]
})
export class EspacioModule { }

