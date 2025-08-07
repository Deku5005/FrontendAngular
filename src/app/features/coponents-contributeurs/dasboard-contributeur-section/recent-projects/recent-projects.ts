import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFolderOpen, faTasks, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-projects',
  imports: [FontAwesomeModule],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.css'
})
export class RecentProjects {
  protected readonly faFolderOpen = faFolderOpen;
  protected readonly faUtensils = faUtensils;
  protected readonly faTasks = faTasks;
  protected readonly faArrowRight = faArrowRight;

}
