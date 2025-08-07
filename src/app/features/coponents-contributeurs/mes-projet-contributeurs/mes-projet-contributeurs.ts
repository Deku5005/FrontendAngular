import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faUser, faCrown, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Project {
  name: string;
  status: 'En cours' | 'Débuté' | 'Terminé';
  role?: string;
  description?: string;
}

@Component({
  selector: 'app-mes-projet-contributeurs',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './mes-projet-contributeurs.html',
  styleUrls: ['./mes-projet-contributeurs.css']
})
export class MesProjetContributeurs {
  // Icônes
  faEye = faEye;


  // Données des projets
  managerProjects: Project[] = [
    {
      name: 'Projet Alpha',
      status: 'En cours',
      role: 'Gestionnaire',
      description: 'Développement d\'une nouvelle application web'
    } ,
    {
      name: 'Projet Star',
      status: 'Terminé',
      role: 'Gestionnaire',
      description: 'Développement d\'une nouvelle application web'
    },
    {
      name: 'Projet Star',
      status: 'Débuté',
      role: 'Gestionnaire',
      description: 'Développement d\'une nouvelle application web'
    }
  ];

  contributorProjects: Project[] = [
    {
      name: 'Projet Beta',
      status: 'En cours',
      role: 'Contributeur',
      description: 'Amélioration de l\'interface utilisateur'
    },
    {
      name: 'Projet ODK',
      status: 'Débuté',
      role: 'Contributeur',
      description: 'Amélioration de l\'interface utilisateur'
    },
    {
      name: 'Projet ODK',
      status: 'Terminé',
      role: 'Contributeur',
      description: 'Amélioration de l\'interface utilisateur'
    }
  ];

  selectedProject: Project | null = null;
  showPopup = false;

  openPopup(project: Project): void {
    this.selectedProject = project;
    this.showPopup = true;
    setTimeout(() => {
      // Force la détection de changement après l'update
    }, 0);
  }

  closePopup(): void {
    this.showPopup = false;
    setTimeout(() => {
      this.selectedProject = null;
    }, 300); // Attend la fin de l'animation
  }


  protected readonly faCrown = faCrown;
  protected readonly faUser = faUser;
  protected readonly faTimes = faTimes;
}
