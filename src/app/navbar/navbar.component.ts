import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('active');
    }
  }
}
