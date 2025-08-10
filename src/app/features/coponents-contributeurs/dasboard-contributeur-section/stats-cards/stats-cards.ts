import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faProjectDiagram, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats-cards',
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: './stats-cards.html',
  styleUrl: './stats-cards.css'
})
export class StatsCards {
  protected readonly faProjectDiagram = faProjectDiagram;
  protected readonly faUsers = faUser;
  protected readonly faTrophy = faTrophy;
  protected readonly faDatabase = faDatabase;


}
