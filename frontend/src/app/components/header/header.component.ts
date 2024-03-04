import { Component, Input } from '@angular/core';
import { CircleHeatComponent } from '../../icons/circle-heat/circle-heat.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CircleHeatComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() city: string = '';
}
