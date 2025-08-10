
import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    FaIconComponent,
    RouterLink // Ajoutez RouterLink aux imports
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly faUserCircle = faUserCircle;

  clearSession(): void {
    // Nettoie le localStorage ou sessionStorage
    localStorage.clear();

  }
}
