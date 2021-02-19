import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {BombaProvider} from '../../providers/bomba/bomba'

@IonicPage()
@Component({
  selector: 'page-bomba',
  templateUrl: 'bomba.html',
})
export class BombaPage {

  info: any;
  tempoBomba1: any;
  tempoBomba2: any;
  vaso1: any;
  vaso2: any;

  constructor(public navCtrl: NavController, private bombaProvider: BombaProvider, public toastCtrl: ToastController) {
  }

  ionViewWillEnter(){
    this.bombaProvider.getInfo().subscribe(info => {
      this.info = info
      this.info = this.info.lista_vasos
      this.vaso1 = this.info[1] // GET RETORNA O ID DOS VASOS DECRESCENTE
      this.vaso2 = this.info[0]
    });

  }
  
  acionaBomba(idVaso){
    let aux = true
    let msg: any

    if (idVaso == 1) {
      if (this.vaso1.status == 1) {
        if (this.tempoBomba1 != undefined && this.tempoBomba1 != "") {
            this.bombaProvider.putBomba(idVaso, this.tempoBomba1)
            //this.sucessoToast()
        }
        else {
          //this.erroToast("Valor inválido!")
          aux = false
          msg = "Valor inválido!"
        }
      } else {
        //this.erroToast("O vaso não está ativo!")
        aux = false
        msg = "O vaso não está ativo!"
      }
    } else {
      if (this.vaso2.status == 1) {
        if (this.tempoBomba2 != undefined && this.tempoBomba2 != "") {
          this.bombaProvider.putBomba(idVaso, this.tempoBomba2)
          //this.sucessoToast()
        }
        else {
          aux = false
          msg = "Valor inválido!"
        }
      } else {
        aux = false
        msg = "O vaso não está ativo!"
      }
    }

    setTimeout(() => {
      if (aux) {
        this.sucessoToast()
      } else {
        this.erroToast(msg)
      }
      this.tempoBomba1 = ""
      this.tempoBomba2 = ""
      this.ionViewWillEnter()
    }, 2000);

  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'A bomba será acionada!',
      duration: 3000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }



}
