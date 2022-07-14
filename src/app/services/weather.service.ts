import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from '../modules/weather.modules';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) {

   }


  getWeatherData(  cityName :  string): Observable<Root>
  {
    return this.http.get<Root>("/current"
    ,{
      headers : new HttpHeaders()
       //.set('Access-Control-Allow-Headers', '*')
      .set(environment.access_key , environment.query),

      params : new HttpParams()
      .set('access_key' , '9b39154fed1a9b368616b3454ddfc188')
      .set('query' , cityName)
      //.set('units' ,'metric')
      //.set('origin','http://api.weatherstack.com')
      .set('mode','json')

     })
  }
}

