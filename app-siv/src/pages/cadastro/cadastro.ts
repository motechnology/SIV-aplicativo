import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { VegetalProvider } from '../../providers/vegetal/vegetal';
import { VasoProvider } from '../../providers/vaso/vaso';
import { AlterarVegetalPage } from '../alterar-vegetal/alterar-vegetal';
import { CriarVegetalPage} from '../criar-vegetal/criar-vegetal';
import { AlterarVasoPage } from '../alterar-vaso/alterar-vaso';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  vegetais: any;
  vasos: any;

  constructor(public navCtrl: NavController, private vegetalProvider: VegetalProvider, private vasoProvider: VasoProvider, 
    public toastCtrl: ToastController, public alertCtrl: AlertController) {
   
  }

  // Página onde haverá método PUT Vegetal
  alterarVegetalPagina(vegetal){
    this.navCtrl.push(AlterarVegetalPage, {vegetal: vegetal})
  }

  // Página onde haverá método POST Vegetal
  criarVegetalPagina(vegetais) {
    this.navCtrl.push(CriarVegetalPage, {vegetais: vegetais})
  }

  // Página onde haverá método PUT Vaso
  alterarVasoPagina(vaso){
    this.navCtrl.push(AlterarVasoPage, {vaso: vaso})
  }


  // MÉTODO DELETE Vegetal
  limpaVegetal(vegetal) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir vegetal?',
      message: 'Realmente deseja excluir o vegetal?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.limpaVasoToast('Nada foi alterado!') // Utiliza o mesmo Toast do Vaso
          }
        },
        {
          text: 'Sim',
          handler: () => {
            if (this.verificaVegetalAtivo(vegetal)==2) {
              setTimeout(() => {
                this.vegetalProvider.deleteVegetal(vegetal)
                this.limpaVasoToast('Vegetal excluído!')
                this.ionViewWillEnter()
              }, 2000);
            } else {
              this.erroLimpaVegetalToast()
            }
          }
        }
      ]
    });
    confirm.present();
  }


  // Método DELETE Vaso
  limpaVaso(vaso) {
    const confirm = this.alertCtrl.create({
      title: 'Desativar vaso?',
      message: 'Realmente deseja desativar o vaso?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.limpaVasoToast('Nada foi alterado!')
          }
        },
        {
          text: 'Sim',
          handler: () => {
            setTimeout(() => {
              this.vasoProvider.deleteVaso(vaso.id)
              this.limpaVasoToast('Vaso desativado!')
              this.ionViewWillEnter()
            }, 1500);
          }
        }
      ]
    });
    confirm.present();
  }

  // Toast do DELETE Vaso
  limpaVasoToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      cssClass: 'toast-limpa'
    });
    toast.present();
  }


  // Toas para erro ao deletar Vegetal
  erroLimpaVegetalToast() {
    let toast = this.toastCtrl.create({
      message: 'O Vegetal ainda está sendo utilizado!',
      duration: 3000,
      cssClass: 'toast-erro-vegetal'
    });
    toast.present();
  }


  // Métodos GET Vegetal e Vaso
  async ionViewWillEnter(){
    /*this.vegetalProvider.getVegetal().subscribe(info => {
      this.vegetais = info
      this.vegetais = this.vegetais.lista_vegetais
    });

    this.vasoProvider.getVaso().subscribe(info => {
      this.vasos = info
      this.vasos = this.vasos.lista_vasos
    });*/

    let vegetal = await this.vegetalProvider.getVegetalTeste()
    this.vegetais = JSON.parse(JSON.stringify(vegetal)).lista_vegetais

    let vaso = await this.vasoProvider.getVasoTeste()
    this.vasos = JSON.parse(JSON.stringify(vaso)).lista_vasos
    console.log(this.vegetais)
    console.log(this.vasos)
  }


  // Verifica se é possível deletar o vegetal
  verificaVegetalAtivo(vegetal) {
    let aux = 0

    for (var item of this.vasos) {
      if (item.vegetal != vegetal) {
        aux++
      }
    }
    
    return aux
  }

}
