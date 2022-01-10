import { Component, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/shared/classes/proyecto';
import proyectos from './../../../assets/proyectos/proyectos.json';
import { ResumenproyectoComponent } from './resumenproyecto/resumenproyecto.component';

@Component({
  selector: 'app-listaproyectos',
  templateUrl: './listaproyectos.component.html',
  styleUrls: ['./listaproyectos.component.css']
})
export class ListaproyectosComponent implements OnInit {
  @Output()
  public dataProjects:
    {
      name : string,
      description : string,
      img : string,
      tags : string
    }[] = proyectos;

  public projectsListClass: Array<Proyecto>;

  constructor() { 
    this.projectsListClass = new Array<Proyecto>();
    this.dataProjects.forEach(projectData => {
      var projectClass = new Proyecto(projectData);
      this.projectsListClass.push(projectClass);
      
    });

  }

  ngOnInit(): void {
 
  }

}
