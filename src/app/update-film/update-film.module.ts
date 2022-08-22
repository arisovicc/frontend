import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFilmPageRoutingModule } from './update-film-routing.module';

import { UpdateFilmPage } from './update-film.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFilmPageRoutingModule
  ],
  declarations: [UpdateFilmPage]
})
export class UpdateFilmPageModule {}
