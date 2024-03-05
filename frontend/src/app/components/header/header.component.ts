import { Component, Input } from '@angular/core';
import { CircleHeatComponent } from '../../icons/circle-heat/circle-heat.component';
import { Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CircleHeatComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() city: string = '';
  @Output() notifyCityChange = new EventEmitter<string>();
  showForm = false;

  changeCity(newCity: string) {
    this.showForm = false;
    this.notifyCityChange.emit(newCity);
  }
}
