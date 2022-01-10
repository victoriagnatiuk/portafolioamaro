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
  public vShowDescription : boolean;

  constructor() { 
    this.vShowDescription = false;
  }

  ngOnInit(): void {
    this.vShowDescription = false;
  }

  fShowDescription(){
    this.vShowDescription = !this.vShowDescription;
  }
}
