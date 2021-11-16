import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2'
import { Categoria } from '../categorias/categoria';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { CategoriaService } from '../categorias/categoria.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  public producto: Producto = new Producto();
  public categorias: Categoria[]=[];


  public titulo:string = "Crear Producto";
  constructor(private productoService: ProductoService, private router:Router, private activatedRoute: ActivatedRoute, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
this.categoriaService.getCategorias().subscribe(
  categorias => this.categorias = categorias
);
    this.cargarProducto();
    
  }
  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.productoService.getProducto(id).subscribe( (producto) => this.producto = producto)
      }
    })
  }

    public create():void{
  
    this.productoService.create(this.producto)
    .subscribe(producto => {
      this.router.navigate(['/productos'])
      Swal.fire('Nueva producto',`producto ${producto.nombre}, creada con éxito`, 'success')
      
    }
    );
  }

  update():void{

    this.productoService.update(this.producto)
    .subscribe( producto => {
      this.router.navigate(['/productos'])
      Swal.fire('producto Actualizado', `producto ${producto.nombre}, actualizado con éxito!`, 'success')
    }

    )
  }

}
