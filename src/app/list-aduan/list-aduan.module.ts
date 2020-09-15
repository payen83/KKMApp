import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ListAduanPageRoutingModule } from './list-aduan-routing.module';

import { ListAduanPage } from './list-aduan.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAduanPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListAduanPage]
})
export class ListAduanPageModule {}
