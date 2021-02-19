import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InformacaoProvider} from '../../providers/informacao/informacao';

@IonicPage()
@Component({
  selector: 'page-informacao',
  templateUrl: 'informacao.html',
})
export class InformacaoPage {

  info: any;
  constructor(public navCtrl: NavController, private informacaoProvider: InformacaoProvider) {

  }

  async ionViewWillEnter(){
    /*this.informacaoProvider.getInfo().subscribe(info => {
      this.info = info
      this.info = this.info.lista_info
      console.log(this.info)
    });*/
    let res = await this.informacaoProvider.getInfoTeste()
    this.info = JSON.parse(JSON.stringify(res)).lista_info
    //console.log(JSON.parse(JSON.stringify(res)).lista_info)
 
  }

}
