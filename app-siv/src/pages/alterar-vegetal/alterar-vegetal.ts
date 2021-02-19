import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';
import { VegetalProvider } from '../../providers/vegetal/vegetal';

@IonicPage()
@Component({
  selector: 'page-alterar-vegetal',
  templateUrl: 'alterar-vegetal.html',
})
export class AlterarVegetalPage {

  vegetal : any;
  novaTempIdeal : any;
  novaUmiIdeal : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vegetalProvider: VegetalProvider,
    public toastCtrl: ToastController) {
    this.vegetal = navParams.get('vegetal');
  }

  ionViewDidLoad() {}

  alteraVegetal(vegetal,novaTempIdeal,novaUmiIdeal) {
    let aux = true

    if (novaTempIdeal == undefined && novaUmiIdeal == undefined) {
      aux = false
    }
    else if (novaTempIdeal != undefined && novaUmiIdeal != undefined) {
      this.vegetalProvider.putVegetal(vegetal.nome,novaTempIdeal,novaUmiIdeal)
    }
    else if (novaTempIdeal == undefined) {
      this.vegetalProvider.putVegetal(vegetal.nome,vegetal.tempIdeal,novaUmiIdeal)
    }
    else if (novaUmiIdeal == undefined ) {
      this.vegetalProvider.putVegetal(vegetal.nome,novaTempIdeal,vegetal.umidadeIdeal)
    }
    
    setTimeout(() => {
      if (aux) {
        this.sucessoToast()
      } else {
        this.erroToast()
      }
      this.novaTempIdeal = ""
      this.novaUmiIdeal = ""
      this.navCtrl.pop()
    }, 2000);

  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'Vegetal alterado com sucesso!',
      duration: 3000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast() {
    let toast = this.toastCtrl.create({
      message: 'Nada foi alterado!',
      duration: 3000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }

}
