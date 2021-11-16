import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormComponent } from './categorias/form.component';
import { ProductosComponent } from './productos/productos.component';
import { FormProductoComponent } from './productos/form-producto.component';
import { VentaComponent } from './venta/venta.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FormServicioComponent } from './servicio/form-servicio.component';

const routes: Routes = [
  {path: '', redirectTo:'/categorias',pathMatch:'full'},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/form', component: FormComponent},
  {path: 'categorias/form/:id', component: FormComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/form', component: FormProductoComponent},
  {path: 'productos/form/:id', component: FormProductoComponent},
  {path: 'ventas', component: VentaComponent},
  {path: 'servicios', component: ServicioComponent},
  {path: 'servicios/form', component: FormServicioComponent},
  {path: 'servicios/form/:id', component: FormServicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
