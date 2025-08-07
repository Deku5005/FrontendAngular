import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faProjectDiagram, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats-cards',
  imports: [FontAwesomeModule],
  templateUrl: './stats-cards.html',
  styleUrl: './stats-cards.css'
})
export class StatsCards {
  protected readonly faProjectDiagram = faProjectDiagram;
  protected readonly faUsers = faUser;
  protected readonly faTrophy = faTrophy;
  protected readonly faDatabase = faDatabase; // Assuming you want to use the Medal icon for rewards

}
