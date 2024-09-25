import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Asignatura {
  nombre: string;
  siglas: string;
}

@Component({
  selector: 'app-mis-asignatura',
  templateUrl: './mis-asignatura.page.html',
  styleUrls: ['./mis-asignatura.page.scss'],
})
export class MisAsignaturaPage implements OnInit {
  asignaturas: Asignatura[] = [
    { nombre: 'Matemáticas', siglas: 'mdi112' },
    { nombre: 'Ciencias', siglas: 'sci233' },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  verAsignatura(id: number) {
    this.router.navigate(['/asignatura', id]);
  }
}