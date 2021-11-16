import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

 categorias: Categoria[]=[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

    this.categoriaService.getCategorias().subscribe(
      categorias => this.categorias = categorias
    );
  }

  delete(categoria: Categoria): void{
    Swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar la Categoria ${categoria.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText:  'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.delete(categoria.id).subscribe(
          Response =>{
            this.categorias= this.categorias.filter(cli => cli !==categoria)
            Swal.fire(
              'Categoria Eliminada!',
              `Categoria  ${categoria.nombre}, eliminada con éxito`,
              'success'
            )
          }

        )
      
      }
    })
  }

}
