import { Component, OnInit } from '@angular/core';
import { Servicio } from './servicio';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  
  servicios: Servicio[]=[];

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe(
      servicio => this.servicios = servicio
    );
  }

}
