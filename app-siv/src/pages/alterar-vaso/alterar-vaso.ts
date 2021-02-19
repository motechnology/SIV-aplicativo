import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VasoProvider } from '../../providers/vaso/vaso';
import { VegetalProvider } from '../../providers/vegetal/vegetal';


@IonicPage()
@Component({
  selector: 'page-alterar-vaso',
  templateUrl: 'alterar-vaso.html',
})
export class AlterarVasoPage {
  vegetais: any
  vaso: any;
  nomeVegetal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    private vasoProvider: VasoProvider, private vegetalProvider: VegetalProvider) {
    this.vaso = this.navParams.get('vaso')
  }

  ionViewWillEnter() {
    this.vegetalProvider.getVegetal().subscribe(info => {
      this.vegetais = info
      this.vegetais = this.vegetais.lista_vegetais
    });
  }

  
  // Método PUT Vaso
  alterarVaso(vaso,nomeVegetal) {
    let aux = true

    if ((nomeVegetal == undefined) || (nomeVegetal == "")) {
      aux = false
    }
    else if (this.verificaNomeVegetal(nomeVegetal)) {
      this.vasoProvider.putVaso(vaso.id,nomeVegetal.toLowerCase())
    } else {
      aux = false
    }
    //this.nomeVegetal = ""
    //this.navCtrl.push(CadastroPage)

    // Esse tempo é necessário para ocorrer o processo HTTP
    setTimeout(() => {
      if (aux) {
        this.sucessoToast()
      } else {
        this.erroToast()
      }
      this.nomeVegetal = ""
      this.navCtrl.pop()
    }, 2000);
   
  }


  verificaNomeVegetal(nome) {
    
    // Verifica se existe esse vegetal 
    let aux = false

    for (var item of this.vegetais) {
      if (item.nome == nome.toLowerCase()) {
        aux = true
      }
    }

    return aux

  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'Vaso alterado com sucesso!',
      duration: 3000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast() {
    let toast = this.toastCtrl.create({
      message: 'Erro ao alterar vaso!',
      duration: 3000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }

}
