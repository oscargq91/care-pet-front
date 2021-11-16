import { Categoria } from "../categorias/categoria";

export class Producto {
    id: string = '';
    nombre: string = '';
    precio: number = 0;
    stock: number = 0;
    descripcion: string = '';
    categoria: Categoria =new Categoria;

    set addCategoria(cat: Categoria ) {
        this.categoria = cat;
    }
}