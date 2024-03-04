import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'service-weather',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];
  ngOnInit(): void { 
    this.fetchData();
  }

  fetchData() {

    this.httpClient
      .get('http://localhost:3030/api/forecast')
      .subscribe((data: any) => {
      console.log(data);
      this.data = data;
    })
  }
}
