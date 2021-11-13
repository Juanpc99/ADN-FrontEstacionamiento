import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AgregarVehiculoComponent } from './agregar-vehiculo/agregar-vehiculo.component';
import { AgregarRoutingModule } from './agregar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgregarService } from './shared/service/agregar-service/agregar.service';



@NgModule({
  declarations: [
    AgregarVehiculoComponent
  ],
  imports: [
    CommonModule,
    AgregarRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    
  ],
  providers: [
    AgregarService,
    DatePipe
  ]
})
export class AgregarModule { }
