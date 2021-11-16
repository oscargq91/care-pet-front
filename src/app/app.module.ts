import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CategoriasComponent } from './categorias/categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './categorias/form.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { FormProductoComponent } from './productos/form-producto.component';
import { VentaComponent } from './venta/venta.component';
import { FormVentaComponent } from './venta/form-venta.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FormServicioComponent } from './servicio/form-servicio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    FormComponent,
    ProductosComponent,
    FormProductoComponent,
    VentaComponent,
    FormVentaComponent,
    ServicioComponent,
    FormServicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
