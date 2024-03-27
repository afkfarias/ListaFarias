import { Component } from '@angular/core';
import { Alumno } from './alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.scss'
})
export class ListaAlumnosComponent {

  listaAlumnos: Alumno[] = [
  { nombre: 'Alex', apellido: 'Pérez', edad: 20, nota: 6, sexo: 'M' },
  { nombre: 'Ana', apellido: 'Juarez', edad: 24, nota: 2, sexo: 'F' },
  { nombre: 'Federico', apellido: 'Manzanelli', edad: 27, nota: 10, sexo: 'M' },
  { nombre: 'Nelson', apellido: 'Ferreira', edad: 25, nota: 4, sexo: 'M' }
  ];


  constructor() {
  }
    

}
