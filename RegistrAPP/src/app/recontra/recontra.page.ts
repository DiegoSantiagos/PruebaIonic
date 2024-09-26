import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recontra',
  templateUrl: './recontra.page.html',
  styleUrls: ['./recontra.page.scss'],
})
export class RecontraPage implements OnInit {
  user: string;

  constructor(private ToastController: ToastController) {
    this.user = 'Usuario1';
  }

  ngOnInit() {
  }

  async correo() {
    
    if (this.user === 'Usuario1') {
      const toast = await this.ToastController.create({
        message: 'Se mando un correo al usuario',
        position: 'middle',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    } else {
      const toast = await this.ToastController.create({
        message: 'El usuario no existe ',
        position: 'middle',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
   }
  }
