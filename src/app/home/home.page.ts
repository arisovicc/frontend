import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nazivFilma: any;
  godina: any;
  ocena: any;
  films: any = [];
  constructor(
    public _apiService: ApiService
  ) {
    this.getFilms();
  }

  addFilm() {

    let data = {
      nazivFilma: this.nazivFilma,
      godina: this.godina,
      ocena: this.ocena,
    }

    this._apiService.addFilm(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.nazivFilma = '';
      this.godina ='';
      this.ocena ='';
      alert('SUCCESS');
      this.getFilms();
    },(error: any) => {
      alert('ERROR');
      console.log("ERROR ===", error);
    })
  }

  getFilms() {
    this._apiService.getFilms().subscribe((res:any) => {
      console.log("SUCCESS ===", res);
      this.films = res;
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  deleteFilm(id) {
    this._apiService.deleteFilm(id).subscribe((res:any) => {
      console.log("SUCCESS");
      this.getFilms();
    },(err:any) => {
      console.log("ERROR")
    })
  } 
}
