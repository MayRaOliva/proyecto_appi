import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url = environment.urlMarvelApi
  constructor(private http: HttpClient) { }

  getMarvel(){
    const query = {
      apikey: "5968e2892ca03f980b8a678ae39994516f646ac7",
    }
    return this.http.get(`${this.url}/v2/everything`, {params: query});
  }
}
