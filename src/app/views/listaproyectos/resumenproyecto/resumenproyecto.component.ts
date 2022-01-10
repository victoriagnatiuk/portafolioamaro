import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/shared/classes/proyecto';
import projectData from './../../../assets/proyectos/proyectos.json';

@Component({
  selector: 'app-resumenproyecto',
  templateUrl: './resumenproyecto.component.html',
  styleUrls: ['./resumenproyecto.component.css']
})
export class ResumenproyectoComponent implements OnInit 
 {
  @Input()
  public cProject: Proyecto | undefined;
  
  constructor() { 
    //  this.nombre = datosProyecto.name;
    //   this.descripcion = datosProyecto.description;
    //   this.imagen = datosProyecto.img;
    //   this.etiquetas = datosProyecto.tags;
  }

  ngOnInit(): void {
    console.log(this.cProject);
  }
}
