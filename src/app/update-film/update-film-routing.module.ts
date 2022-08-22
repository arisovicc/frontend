import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateFilmPage } from './update-film.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateFilmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFilmPageRoutingModule {}
