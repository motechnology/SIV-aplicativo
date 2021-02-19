import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { EmailPage} from '../email/email';
import { InformacaoProvider } from '../../providers/informacao/informacao';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  info: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
    private informacaoProvider: InformacaoProvider, public loadingCtrl: LoadingController) {

  }

  async ionViewWillEnter(){
    /*this.informacaoProvider.getStart().subscribe(info => {
      this.info = info
    });
    console.log(this.info)*/

    let res = await this.informacaoProvider.getStart()
    //console.log(JSON.parse(JSON.stringify(res))) // Objeto JSON

    let res2 = await this.informacaoProvider.getInfoTeste()
    //console.log(JSON.parse(JSON.stringify(res2)).lista_info)

  }

   // Redireciona para a página de enviar email
   enviarEmailPagina() { this.navCtrl.push(EmailPage) }

}
