import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  ICONS_DATA = [
    { number: '01d', name: '../../assets/weatherIcons/clear-day.svg' },
    { number: '01n', name: '../../assets/weatherIcons/clear-night.svg' },
    { number: '02d', name: '../../assets/weatherIcons/partly-cloudy-day.svg' },
    { number: '02n', name: '../../assets/weatherIcons/partly-cloudy-night.svg' },
    { number: '03d', name: '../../assets/weatherIcons/clouds.svg' },
    { number: '03n', name: '../../assets/weatherIcons/clouds.svg' },
    { number: '04d', name: '../../assets/weatherIcons/partly-cloudy-day.svg' },
    { number: '04n', name: '../../assets/weatherIcons/partly-cloudy-night.svg' },
    { number: '09d', name: '../../assets/weatherIcons/rainy-day.svg' },
    { number: '09n', name: '../../assets/weatherIcons/rainy-night.svg' },
    { number: '10d', name: '../../assets/weatherIcons/rainy-day.svg' },
    { number: '10n', name: '../../assets/weatherIcons/rainy-night.svg' },
    { number: '11d', name: '../../assets/weatherIcons/thunderstorm-day.svg' },
    { number: '11n', name: '../../assets/weatherIcons/thunderstorm-night.svg' },
    { number: '13n', name: '../../assets/weatherIcons/snow.svg' },
    { number: '13d', name: '../../assets/weatherIcons/snow.svg' },
    { number: '50d', name: '../../assets/weatherIcons/mist.svg' },
    { number: '50n', name: '../../assets/weatherIcons/mist.svg' },
  ];

  constructor(private http: HttpClient) {}

  fetchWeather() {
    return this.http.get<any>(
      'https://api.openweathermap.org/data/2.5/weather?id=' + environment.openWeatherClientID + '&appid=' + environment.openWeatherAPIID + '&units=imperial'
    );
  }

  getIconName(icon: string) {
    return this.ICONS_DATA.find((el) => el.number === icon).name;
  }

}