import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faChartLine, faFolderOpen, faMagnifyingGlassChart, faStickyNote, faTasks, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-recent-projects',
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.css'
})
export class RecentProjects {
  protected readonly faFolderOpen = faFolderOpen;
  protected readonly faUtensils = faUtensils;
  protected readonly faTasks = faTasks;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faChartLine = faChartLine;
  protected readonly faStickyNote = faStickyNote;
  protected readonly faMagnifyingGlassChart = faMagnifyingGlassChart;

 @Input() filteredQuery: string = '';
 
  projects: Project[] = [
  {
    name: 'Appli Recettes',
    description: 'Application mobile de partage de recettes avec IA',
    completion: 45,
    icon: faUtensils
  },
  {
    name: 'TaskFlow',
    description: 'Plateforme de gestion de tâches en temps réel',
    completion: 75,
    icon: faTasks
  },
  {
    name: 'Dashboard IA',
    description: 'Tableau de bord intelligent pour vos données',
    completion: 30,
    icon: faChartLine
  },
  {
    name: 'Gestion Notes',
    description: 'Application de prise de notes sécurisée',
    completion: 60,
    icon: faStickyNote
  },
  {
    name: 'Projet Analytics',
    description: 'Outil d’analyse de performances',
    completion: 20,
    icon: faMagnifyingGlassChart
  },
];

  visibleProjects: Project[] = [];

  ngOnInit() {
    this.visibleProjects = this.projects.slice(0, 2); // afficher seulement 2 projets au début
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('filteredQuery' in changes) {
      const query = this.filteredQuery.trim().toLowerCase();
      if (query === '') {
        this.visibleProjects = this.projects.slice(0, 2);
      } else {
        const match = this.projects.find(p => p.name.toLowerCase() === query);
        this.visibleProjects = match ? [match] : [];
      }
    }
  }

  loadMore() {
    this.visibleProjects = this.projects;
  }

}
