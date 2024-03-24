import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-i-phone-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i-phone-display.component.html',
  styleUrl: './i-phone-display.component.css'
})
export class IPhoneDisplayComponent {
  currentColor: string = 'pink'; 
  imageUrl: string = `assets/images/${this.currentColor}.jpg`;
  selectedModel: string = 'iPhone 15'; 
  selectedColorName: string = 'Розовый';

  changeColor(color: string, colorName: string) {
    this.currentColor = color;
    this.selectedColorName = colorName;
    this.imageUrl = `assets/images/${color}.jpg`;
  }
}
