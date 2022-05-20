import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  currentMessage:string;
  currentTemp:number;
  currentIcon:string;
  showWeather:Boolean = false;

  constructor(private weatherService:WeatherService) {}

  ngOnInit(): void {
    this.weatherService.fetchWeather().subscribe((data) =>{
      if (data) {
        this.showWeather = true;
        this.currentMessage = data.weather[0].main;
        this.currentTemp = Math.round(data.main.temp);
        this.currentIcon = this.weatherService.getIconName(data.weather[0].icon);
      }
    });
  }
}
