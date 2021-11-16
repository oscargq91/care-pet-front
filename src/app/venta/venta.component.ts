import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos/producto';
import { ProductoService } from '../productos/producto.service';
import { Venta } from './venta';
import { VentaService } from './venta.service';
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  productos: Producto[]=[];

  venta: Venta = new Venta();
  

  constructor(private productoService: ProductoService, private ventaService: VentaService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }
  
  create(producto: Producto): void{

    Swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas comprar el producto ${producto.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Comprar!',
      cancelButtonText:  'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ventaService.createVenta(producto).subscribe(
          Response =>{

            Swal.fire(
              'Producto Comprado!',
              `Producto  ${producto.nombre}, comprado con exito, con un precio de ${producto.precio}`,
              'success'
            )
          }

        )
      
      }
    })
  }
  }
  

