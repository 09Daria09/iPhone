import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPhoneDisplayComponent } from './i-phone-display/i-phone-display.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IPhoneDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iPhone';
}
