import { Component } from '@angular/core';
import * as EmailValidator from 'email-validator';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmailProvider} from '../../providers/email/email'

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
  nome: any;
  email: any;
  corpo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController, private emailProvider: EmailProvider) {
  }

  ionViewDidLoad() {}

  enviarEmail(nome, email, corpo) {
    
    if ((nome != undefined) && (email != undefined) && (corpo != undefined)){
      if (EmailValidator.validate(email)) {
        this.emailProvider.enviarEmail(nome,email,corpo)
        this.sucessoToast()
      } else {
        this.erroToast('E-mail inválido')
      }
    } else {
      this.erroToast('Erro ao enviar e-mail!')
    }
    
    this.nome = ""
    this.email = ""
    this.corpo = ""

    this.navCtrl.pop()
  }

  sucessoToast() {
    let toast = this.toastCtrl.create({
      message: 'Sucesso! Logo mais você receberá um retorno.',
      duration: 2000,
      cssClass: 'toast-succ'
    });
    toast.present();
  }

  erroToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      cssClass: 'toast-fail'
    });
    toast.present();
  }

}
