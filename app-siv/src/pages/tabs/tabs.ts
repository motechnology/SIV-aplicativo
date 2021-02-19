import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { InformacaoPage } from '../informacao/informacao';
import { CadastroPage } from '../cadastro/cadastro';
import { BombaPage } from '../bomba/bomba';
import { GraficoPage } from '../grafico/grafico'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = CadastroPage;
  tab3Root = BombaPage;
  tab4Root = InformacaoPage;
  tab5Root = GraficoPage;

  constructor() {

  }
}
