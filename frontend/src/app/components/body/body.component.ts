import { Component, Input, inject } from '@angular/core';
import { WeatherComponent } from '../../services/weather/weather.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [WeatherComponent, HttpClientModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  
  // httpClient = inject(HttpClient);
  @Input() weather: string = '';
  @Input() feels_like: string = '';
  // data: any[] = [];
  
  // ngOnInit(): void { 
  //   this.fetchData();
  // }

  // fetchData() {

  //   this.httpClient
  //     .get('http://localhost:3030/api/forecast')
  //     .subscribe((data: any) => {
  //     console.log(data);
  //     this.data = data;
  //     this.weather = data.main.temp;
  //     this.feels_like = data.main.feels_like;
  //   })
  // }
}
