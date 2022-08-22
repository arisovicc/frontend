import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

  addFilm(data) {
    return this.http.post('http://localhost/baza-filmova/backend/create.php', data);
  }

  getFilms() {
    return this.http.get('http://localhost/baza-filmova/backend/getFilms.php');
  }

  deleteFilm(id) {
    return this.http.delete('http://localhost/baza-filmova/backend/delete.php?id='+id);
  }

  getFilm(id){
    return this.http.get('http://localhost/baza-filmova/backend/getSingleFilm.php?id='+id);
  }

  updateFilm(id,data) {
    return this.http.put('http://localhost/baza-filmova/backend/updateFilm.php?id='+id,data);
  }
}
