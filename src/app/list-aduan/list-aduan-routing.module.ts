import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAduanPage } from './list-aduan.page';

const routes: Routes = [
  {
    path: '',
    component: ListAduanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAduanPageRoutingModule {}
