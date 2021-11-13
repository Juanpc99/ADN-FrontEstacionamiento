import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/espacio', pathMatch: 'full' },
  { path: 'vehiculo', loadChildren: () => import('./feature/vehiculo/vehiculo.module').then(mod => mod.VehiculoModule)  },
  { path: 'espacio', loadChildren: () => import('./feature/espacio/espacio.module').then(mod => mod.EspacioModule) },
  { path: 'agregar', loadChildren: () => import('./feature/agregar/agregar.module').then(mod => mod.AgregarModule)},
  { path: 'sacar', loadChildren: () => import('./feature/sacar/sacar.module').then(mod => mod.SacaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
