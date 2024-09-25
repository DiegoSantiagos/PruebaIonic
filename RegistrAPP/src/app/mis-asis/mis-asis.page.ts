import { Component, OnInit } from '@angular/core';

interface Asignatura {
  nombre: string;
  siglas: string;
  asistencia: any;
  totalClases: number;
}

@Component({
  selector: 'app-mis-asis',
  templateUrl: './mis-asis.page.html',
  styleUrls: ['./mis-asis.page.scss'],
})
export class MisAsisPage implements OnInit {

  asignaturas: Asignatura[] = [
    { nombre: 'Matemáticas', siglas: 'mdi112', asistencia: '15', totalClases: 20 },
    { nombre: 'Ciencias', siglas: 'sci233', asistencia: '10', totalClases: 10 },
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
