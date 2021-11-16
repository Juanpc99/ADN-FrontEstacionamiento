import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';
import { SacarRoutingModule } from './sacar-routing.module';
import { SacarService } from './shared/service/sacar.service';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    SacarVehiculoComponent
  ],
  imports: [
    CommonModule,
    SacarRoutingModule,
    SharedModule,

  ],
  providers: [
    SacarService,
    DatePipe
  ]
})
export class SacaModule { }

