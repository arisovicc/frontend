import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.page.html',
  styleUrls: ['./update-film.page.scss'],
})
export class UpdateFilmPage implements OnInit {
  id:any;
  nazivFilma: any;
  godina: any;
  ocena: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) { 
    this.route.params.subscribe((param:any) => {
      this.id = param.id;
      console.log(this.id);
      this.getFilm(this.id);
    })
  }

  ngOnInit() {
  }

  getFilm(id){
    this._apiService.getFilm(id).subscribe((res:any) => {
      console.log("SUCCESS", res);
      let film = res[0];
      this.nazivFilma = film.nazivFilma;
      this.godina = film.godina;
      this.ocena = film.ocena;
    }, (err:any) => {
      console.log("ERROR", err)
    })
  }

  updateFilm() {
    let data = {
      nazivFilma: this.nazivFilma,
      godina: this.godina,
      ocena: this.ocena,
    }
    this._apiService.updateFilm(this.id, data).subscribe((res:any) => {
      console.log("SUCCESS", res);
      this.router.navigateByUrl('/home');
      let film = res[0];
    }, (err:any) => {
      console.log("ERROR", err)
    })
  }

}
