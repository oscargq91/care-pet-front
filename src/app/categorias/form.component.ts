import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  public categoria: Categoria = new Categoria();
  public titulo:string = "Crear Categoria";

  constructor(private categoriaService: CategoriaService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCategoria();
  }

  cargarCategoria(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.categoriaService.getCategoria(id).subscribe( (categoria) => this.categoria = categoria)
      }
    })
  }

  public create():void{
    this.categoriaService.create(this.categoria)
    .subscribe(categoria => {
      this.router.navigate(['/categorias'])
      Swal.fire('Nueva Categoria',`Categoria ${categoria.nombre}, creada con éxito`, 'success')
      
    }
    );
  }

  update():void{
    this.categoriaService.update(this.categoria)
    .subscribe( categoria => {
      this.router.navigate(['/categorias'])
      Swal.fire('Categoria Actualizado', `Categoria ${categoria.nombre}, actualizado con éxito!`, 'success')
    }

    )
  }


}
