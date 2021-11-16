import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[]=[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {

    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  delete(producto: Producto): void{
    Swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar el producto ${producto.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText:  'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.delete(producto.id).subscribe(
          Response =>{
            this.productos= this.productos.filter(cli => cli !==producto)
            Swal.fire(
              'Categoria Eliminada!',
              `Categoria  ${producto.nombre}, eliminada con éxito`,
              'success'
            )
          }

        )
      
      }
    })
  }

}
