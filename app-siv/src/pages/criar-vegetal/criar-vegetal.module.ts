import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarVegetalPage } from './criar-vegetal';

@NgModule({
  declarations: [
    CriarVegetalPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarVegetalPage),
  ],
})
export class CriarVegetalPageModule {}
