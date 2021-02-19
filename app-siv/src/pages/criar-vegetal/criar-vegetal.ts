import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VegetalProvider} from '../../providers/vegetal/vegetal';

@IonicPage()
@Component({
  selector: 'page-criar-vegetal',
  templateUrl: 'criar-vegetal.html',
})
export class CriarVegetalPage {
  nome : any;
  tempIdeal : any;
  umiIdeal : any;
  vegetais: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vegetalProvider: VegetalProvider, 
    public toastCtrl: ToastController) {
      this.vegetais = navParams.get('vegetais') // Lista de vegetais
  }

  ionViewDidLoad() {}

  criaVegetal(nome,tempIdeal,umiIdeal) {
    let aux = true

    if ((nome == undefined) || (tempIdeal == undefined) || (umiIdeal == undefined)) {
        aux = false
    }
    else if (this.verificaNomeVegetal(nome)) {
      aux = false
    }
    else {
      nome = nome.toLowerCase()
      this.vegetalProvider.postVegetal(nome,tempIdeal,umiIdeal)
    }
    
    setTimeout(() => {
      if (aux) {
        this.sucessoToast()
      } else {
        this.erroToast()
      }
      this.nome = ""
      this.tempIdeal = ""
      this.umiIdeal = ""
      this.navCtrl.pop()
    }, 2000);

  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'Novo vegetal cadastrado com sucesso!',
      duration: 3000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast() {
    let toast = this.toastCtrl.create({
      message: 'Erro ao cadastrar vegetal!',
      duration: 3000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }

  verificaNomeVegetal(nome) {
    // Verifica se já existe esse vegetal cadastrado
    let aux = false

    for (var item of this.vegetais) {
      if (item.nome == nome.toLowerCase()) {
        aux = true
      }
    }

    return aux

  }
}
