import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusixmatchService {

  constructor(private http: HttpClient) {
  }


  getSongList(songWord) {
    return this.http.get(`http://localhost:8082/api/song/${songWord}`);
    //https://www.google.com/search?q=asd
    //return this.http.get(`http://www.google.com/search?q=${songWord}`);
    //return "Himanshu";
    
    
  }
}
