import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from '../../../shared/models/vehiculo';
import { AgregarService } from '../shared/service/agregar-service/agregar.service';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
})
export class AgregarVehiculoComponent implements OnInit {

  idEspacio: number;
  form: FormGroup;
  vehiculo: Vehiculo;
  fecha: string;
  hayError: boolean = false;
  mensajeError: string;

  constructor(
    private activeRoutes: ActivatedRoute, private formBuilder: FormBuilder,
    protected agregarService: AgregarService, private datePipe: DatePipe,
    private router: Router
  ) {
    this.buildForm();

  }

  ngOnInit() {
    this.activeRoutes.params.subscribe(params => {
      this.idEspacio = params.id;
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      placa: [''.toUpperCase(), [Validators.required, Validators.maxLength(6)]],
      tipoVehiculo: ['', [Validators.required]],
      modeloVehiculo: ['', [Validators.required]],
      nombrePropietario: ['', [Validators.required]],
      apellidoPropietario: ['', [Validators.required]],
      precioHora: ['', [Validators.required]]
    });


  }


  save() {
    this.hayError =false;
    this.fecha = this.datePipe.transform(Date.now().toString(), 'yyy-MM-dd HH:mm:ss');
    this.vehiculo =new Vehiculo(this.form.value.placa, this.idEspacio, this.form.value.tipoVehiculo,
    this.form.value.modeloVehiculo, this.form.value.nombrePropietario, this.form.value.apellidoPropietario,
    this.fecha, this.fecha, this.form.value.precioHora)
    this.agregarService.agregarCarro(this.vehiculo).subscribe((data) => {
      if(data.valor != null)
      console.log(data);
      this.hayError = false
      this.router.navigate(['']);
      },
      (err) => {
        this.hayError = true;
        this.mensajeError = err.error.mensaje;

      })


    

 

  }
}
