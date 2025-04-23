import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  nav_check:boolean = false;
  expand():void {
    this.nav_check= !this.nav_check
  }
  taps:any[]=[
  {
    page : "showcase",
  },
  {
    page : "services",
  },
  {
    page : "designers",
  },
  {
    page : "packages",
  },
  {
    page : "contact",
  }
]
}
