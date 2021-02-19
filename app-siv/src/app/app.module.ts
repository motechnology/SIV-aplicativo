import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts-x';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InformacaoPage } from '../pages/informacao/informacao';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { BombaPage } from '../pages/bomba/bomba';
import { AlterarVegetalPage} from '../pages/alterar-vegetal/alterar-vegetal';
import { AlterarVasoPage} from '../pages/alterar-vaso/alterar-vaso';
import { CriarVegetalPage } from '../pages/criar-vegetal/criar-vegetal';
import { EmailPage} from '../pages/email/email';
import { GraficoPage} from '../pages/grafico/grafico';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BombaProvider } from '../providers/bomba/bomba';
import { VasoProvider } from '../providers/vaso/vaso';
import { VegetalProvider } from '../providers/vegetal/vegetal';
import { InformacaoProvider } from '../providers/informacao/informacao';
import { EmailProvider } from '../providers/email/email';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InformacaoPage,
    CadastroPage,
    BombaPage,
    AlterarVegetalPage,
    AlterarVasoPage,
    CriarVegetalPage,
    EmailPage,
    GraficoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InformacaoPage,
    CadastroPage,
    BombaPage,
    AlterarVegetalPage,
    AlterarVasoPage,
    CriarVegetalPage,
    EmailPage,
    GraficoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BombaProvider,
    VasoProvider,
    VegetalProvider,
    InformacaoProvider,
    EmailProvider
  ]
})
export class AppModule {}
