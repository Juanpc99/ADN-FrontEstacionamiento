// import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpService } from 'src/app/core/services/http.service';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { BuscadorComponent } from './buscador.component';
// import { VehiculoService } from '../../shared/service/vehiculo.service';

// describe('BuscadorComponent', () => {
//   let component: BuscadorComponent;
//   let fixture: ComponentFixture<BuscadorComponent>;
//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ BuscadorComponent ],
//       imports: [
//         CommonModule,
//         HttpClientModule,
//         RouterTestingModule,
//         ReactiveFormsModule,
//         FormsModule
//       ],
//       providers: [VehiculoService, HttpService],
//     })
//     .compileComponents();
// }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BuscadorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('debe buscar vehiculo por placa', () => {
//     component.buscar('AS')
//     expect(component.hayError).toBe(false);
//   });

// //   it('Registrando producto', () => {
// //     expect(component.productoForm.valid).toBeFalsy();
// //     component.productoForm.controls.id.setValue('001');
// //     component.productoForm.controls.descripcion.setValue('Producto test');
// //     expect(component.productoForm.valid).toBeTruthy();

// //     component.cerar();

// //     // Aca validamos el resultado esperado al enviar la petición
// //     // TODO adicionar expect
// //   });
// });


//TODO: Falta hacer estas pruebas