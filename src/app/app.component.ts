import { Component, OnInit } from '@angular/core';
import { Root } from './modules/weather.modules';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  condition : number |undefined;
  title = 'weatherApp';
  constructor(private weatherservice : WeatherService){

  }
  cityName : string ="karimnagar";
  weatherData?:Root;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);

}
onSubmit(){
  this.getWeatherData(this.cityName);
  this.cityName='';
}

private getWeatherData(cityName : string) {
  this.weatherservice.getWeatherData(this.cityName)
  .subscribe({
  next:(response)=>{
    this.weatherData = response;
    this.condition = this.weatherData.current.temperature ;
    console.log("this is our api")
    console.log(response);
  }
  })
}
}
