import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodyComponent,HeaderComponent ,RouterOutlet, MainContainerComponent, FooterComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  httpClient = inject(HttpClient);
  weather = "";
  feels_like = "";
  city = "";
  data: any[] = [];
  weather_description = "";
  
  ngOnInit(): void { 
    this.fetchData();
  }

  fetchData() {

    this.httpClient
      .get('http://localhost:3030/api/forecast')
      .subscribe((data: any) => {
      this.data = data;
      this.city = data.name;
      this.weather = data.main.temp;
      this.feels_like = data.main.feels_like;
      this.weather_description = data.weather[0].description
    })
  }

  fetchDataByCity(city: string){
    this.httpClient
    .get('http://localhost:3030/api/forecast?city='+city)
    .subscribe((data: any) => {
        console.log(data);
      this.city = data.name;
      this.weather = data.main.temp;
      this.feels_like = data.main.feels_like;
      this.weather_description = data.weather[0].description
    })
  }
}
