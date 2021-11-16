import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2'
import { Servicio } from './servicio';
import { ServicioService } from './servicio.service';


@Component({
  selector: 'app-form-servicio',
  templateUrl: './form-servicio.component.html',
  styleUrls: ['./form-servicio.component.css']
})
export class FormServicioComponent implements OnInit {

  public servicio: Servicio = new Servicio();
  public titulo:string = "Crear Servicio";

  constructor(private servicioService: ServicioService, private router:Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
  }

  public create():void{
  
    this.servicioService.create(this.servicio)
    .subscribe(servicio => {
      this.router.navigate(['/servicios'])
      Swal.fire('Nueva servicio',`servicio ${servicio.nombre}, creado con éxito`, 'success')
      
    }
    );
  }

}
