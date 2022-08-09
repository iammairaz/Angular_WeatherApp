import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private weatherService : WeatherService) {}

  weatherData ?: WeatherData;
  cityName : string = 'seattle';
  displayval : string = '';
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData (cityName:string) {
    this.displayval = cityName;
    this.weatherService.getweatherData(cityName)
    .subscribe({
      next : (response) => {
        this.weatherData = response;
        console.log(response);
        console.log(cityName);
      }
    })
  }
}
