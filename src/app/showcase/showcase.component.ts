import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {
  images:any[]=[
    {
      photo:"../../assets/images/kitchenconcrete.jpg"
    },
    {
      photo:"../../assets/images/atrium.jpg"
    },
    {
      photo:"../../assets/images/bedroom.jpg"
    },
    {
      photo:"../../assets/images/livingroom.jpg"
    },
    {
      photo:"../../assets/images/diningroom.jpg"
    },
    {
      photo:"../../assets/images/livingroom2.jpg"
    },
  ]
}
