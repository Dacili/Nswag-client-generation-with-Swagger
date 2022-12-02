import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hubConnectionBuilder!: HubConnection;
  offers: any[] = [];

  ngOnInit(): void {
    this.hubConnectionBuilder = new HubConnectionBuilder().withUrl('https://localhost:7163/offers').configureLogging(LogLevel.Information).build();
    this.hubConnectionBuilder.start().then(() => console.log('Connection started.......!')).catch(err => console.log('Error while connect with server'));
    this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
      this.offers.push(result);
    });
  }
  public forecasts?: WeatherForecast[];
  message = "";
  constructor(private http: HttpClient) {
    //http.get<WeatherForecast[]>('https://localhost:7163/weatherforecast').subscribe(result => {
    //  this.forecasts = result;

    //  console.log('weather succeed')
    //}, error => console.error(error));
    //http.get<any>('/MediFeed').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
  }

  title = 'mediSignalRAngular';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
     // 'Content-Type': 'application/json'
      //,
      //Authorization: 'my-auth-token'
    })
  };
  setUpMessage(textValue: any) {
    this.message = textValue;
  }

  sendMessage() {
   
    this.http.post<any>('https://localhost:7163/api/product/productoffers', JSON.stringify(this.message), this.httpOptions).subscribe(result => {
      console.log(result)
      this.message = "";


    });
    /*  , error => console.error(error));*/
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
