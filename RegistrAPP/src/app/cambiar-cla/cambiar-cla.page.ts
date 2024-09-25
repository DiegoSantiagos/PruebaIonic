import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-cla',
  templateUrl: './cambiar-cla.page.html',
  styleUrls: ['./cambiar-cla.page.scss'],
})
export class CambiarClaPage implements OnInit {
  claveActual: string;
  nuevaClave: string;
  confirmarClave: string;

  constructor(private ToastController: ToastController) {
    this.claveActual = '';
    this.nuevaClave = '';
    this.confirmarClave = '';
  }


  ngOnInit() {
  }

  async cambiarClave() {
    if (this.claveActual === 'MiClav3') {
      if (this.nuevaClave === '') {
        const toast = await this.ToastController.create({
          message: 'ingresar nueva clave',
          position: 'middle',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      } else if (this.nuevaClave === this.confirmarClave) {
        this.claveActual = this.nuevaClave;
        this.nuevaClave = '';
        this.confirmarClave = '';

        const toast = await this.ToastController.create({
          message: 'Clave cambiada correctamente',
          position: 'middle',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      } else {
        const toast = await this.ToastController.create({
          message: 'Las claves no coinciden',
          position: 'middle',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    } else if (this.claveActual === '') {
      const toast = await this.ToastController.create({
        message: 'ingresar clave actual',
        position: 'middle',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    } else {
      const toast = await this.ToastController.create({
        message: 'contraseña incorrecta',
        position: 'middle',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

}
