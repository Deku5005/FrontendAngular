import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faEllipsisV, faEye, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { PopupEye } from "./popup-eye/popup-eye";

@Component({
  selector: 'app-list-projects',
  imports: [CommonModule, FontAwesomeModule, PopupEye],
  templateUrl: './list-projects.html',
  styleUrl: './list-projects.css'
})
export class ListProjects {
  protected readonly faEye = faEye;
  protected readonly faLockOpen = faLockOpen;
  protected readonly faEllipsisV = faEllipsisV;
  protected readonly faArrowLeft = faArrowLeft;

  // Liste des projets
  projets = [
    {
      titre: 'Système de recommandation',
      statut: 'En cours',
      coin: 100,
      debloque: 0,
      niveau: 'Débutant',
      dateCreation: '12/01/2025',
      description:
        'Système intelligent qui propose des recommandations personnalisées aux utilisateurs selon leurs préférences et comportements.',
      technologies: ['Python', 'Machine Learning', 'API REST'],
      duree: '3 mois',
      contributeurs: 3,
      competences: ['Python', 'Machine Learning', 'Analyse de données', 'APIs REST'],
      equipe: [
        { role: 'Data Scientist', actuel: 1, requis: 1 },
        { role: 'Développeur Backend', actuel: 0, requis: 1 },
        { role: 'Designer UX', actuel: 0, requis: 1 }
      ]
    },
    {
      titre: 'Système de distribution',
      statut: 'En cours',
      coin: 500,
      debloque: 0,
      niveau: 'Intermédiaire',
      dateCreation: '15/01/2025',
      description: 'Plateforme de gestion de distribution pour entreprises logistiques.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
      duree: '4 mois',
      contributeurs: 4,
      competences: ['Java', 'Spring Boot', 'Bases de données', 'Architecture microservices'],
      equipe: [
        { role: 'Développeur Backend', actuel: 2, requis: 3 },
        { role: 'Développeur Frontend', actuel: 1, requis: 1 }
      ]
    },
    {
      titre: 'Application de chat temps réel',
      statut: 'Terminé',
      coin: 1000,
      debloque: 1,
      niveau: 'Avancé',
      dateCreation: '20/12/2024',
      description: 'Application de messagerie instantanée avec WebSocket pour une communication en temps réel.',
      technologies: ['Node.js', 'Socket.IO', 'Angular'],
      duree: '2 mois',
      contributeurs: 5,
      competences: ['Node.js', 'Socket.IO', 'Angular', 'Temps réel'],
      equipe: [
        { role: 'Développeur Fullstack', actuel: 2, requis: 2 },
        { role: 'Testeur QA', actuel: 1, requis: 1 }
      ]
    },
    {
      titre: 'E-commerce gestion stock...',
      statut: 'Débuté',
      coin: 1500,
      debloque: 0,
      niveau: 'Intermédiaire',
      dateCreation: '01/02/2025',
      description: 'Application e-commerce avec gestion de stock en temps réel et notifications automatiques.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      duree: '5 mois',
      contributeurs: 2,
      competences: ['React', 'Node.js', 'MongoDB', 'Express'],
      equipe: [
        { role: 'Développeur Frontend', actuel: 1, requis: 1 },
        { role: 'Développeur Backend', actuel: 1, requis: 1 },
        { role: 'Product Owner', actuel: 0, requis: 1 }
      ]
    },
    {
      titre: 'Système de suivi des ventes...',
      statut: 'Terminé',
      coin: 1800,
      debloque: 1,
      niveau: 'Avancé',
      dateCreation: '05/11/2024',
      description: 'Tableaux de bord et indicateurs clés de performance pour le suivi des ventes.',
      technologies: ['Python', 'Django', 'Power BI'],
      duree: '6 mois',
      contributeurs: 4,
      competences: ['Python', 'Django', 'DataViz', 'Reporting'],
      equipe: [
        { role: 'Développeur Backend', actuel: 1, requis: 1 },
        { role: 'Analyste Data', actuel: 2, requis: 2 },
        { role: 'Designer UI', actuel: 1, requis: 1 }
      ]
    }
  ];

  // Projet sélectionné pour le popup
  selectedProject: any = null;
  
  // Contrôle l'affichage du popup
  showModal = false;

  // Ouvre le popup avec les détails d'un projet
  openProjectDetails(project: any) {
    // this.selectedProject = project;
    // this.showModal = true;
    // // Empêche le défilement en arrière-plan
    // document.body.style.overflow = 'hidden';

    console.log("Projet cliqué :", project);
    this.selectedProject = project;
    this.showModal = true;  
  }

  // Ferme le popup
  closeProjectDetails() {
    this.showModal = false;
    // Rétablit le défilement normal
    document.body.style.overflow = 'auto';
  }

  // Gestion des actions du popup
  onSaveProject() {
    console.log('Projet enregistré:', this.selectedProject?.titre);
    // Logique d'enregistrement ici
  }

  onJoinProject() {
    console.log('Rejoint le projet:', this.selectedProject?.titre);
    // Logique pour rejoindre le projet ici
  }
}
