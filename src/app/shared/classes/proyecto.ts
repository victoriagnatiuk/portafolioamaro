import { Injectable } from '@angular/core';
import projectData from './../../../assets/proyectos/proyectos.json';

export class Proyecto {
    public nombre: string;
    public descripcion: string;
    public imagen: string;
    public etiquetas: Array<string>;
    
    constructor(datosProyecto: typeof projectData){
        this.nombre = datosProyecto.name;
        this.descripcion = datosProyecto.description;
        this.imagen = datosProyecto.img;
        var etiquetasString = datosProyecto.tags;
        this.etiquetas = new Array<string>();
        etiquetasString.split(',').forEach((tag: string) => {
            this.etiquetas.push(tag);
        });
        console.log("Etiquetas ", this.etiquetas);
    }

    public addTag(tag: string){
        this.etiquetas.push(tag);
    }
}
