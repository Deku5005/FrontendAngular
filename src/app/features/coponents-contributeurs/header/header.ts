import { Component, ElementRef, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBell, faMoon, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly faUserCircle = faUserCircle;
  protected readonly faBell = faBell;
  protected readonly faMoon = faMoon;

  private estActiver = false;

  @ViewChild('btn') btnRef!: ElementRef;
  @ViewChild('icon') iconRef!: ElementRef;
  @ViewChild('header') headerRef!: ElementRef;

  ngAfterViewInit() {
    this.btnRef.nativeElement.addEventListener('click', () => {
      this.toggleDarkMode();
    });
  }

  toggleDarkMode(): void {
    this.estActiver = !this.estActiver;
    if (this.estActiver) {
      this.iconRef.nativeElement.style.color = "white";
      this.headerRef.nativeElement.style.backgroundColor = "#2417df";
      this.btnRef.nativeElement.style.color = "white";
    } else {
      this.iconRef.nativeElement.style.color = "#2417df";
      this.headerRef.nativeElement.style.backgroundColor = "";
      this.btnRef.nativeElement.style.color = "#2417df";
    }
  }

  clearSession(): void {
    // Nettoie le localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }
}
