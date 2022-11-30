import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('https://localhost:7163/weatherforecast').subscribe(result => {
      this.forecasts = result;

      console.log('weather succeed')
    }, error => console.error(error));
    //http.get<any>('/MediFeed').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
  }

  title = 'mediSignalRAngular';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
