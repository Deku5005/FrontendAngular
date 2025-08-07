import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {Location} from '@angular/common';
import { Router } from '@angular/router';


export interface Contribution {
  icon: string;
  title: string;
  date: string;
  description: string;
  status: string;
  statusText: string;
  auteur: string;
}

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.html',
  styleUrl: './contribution.css'
})
export class ContributionComponent {
  constructor(private router: Router, private location: Location) {} // Injectez Location abd Router
  activeTab: string = 'contribution';



  contributions: Contribution[] = [
    {
      icon: 'fa-bell',
      title: 'API NOTIFICATION',
      date: '15 Juil 2023',
      description: 'Intégration de l\'authentification OAUTH avec GitHub pour Synchroniser les issues et pull requests.',
      status: 'rejected',
      statusText: 'Rejetée',
      auteur: 'Oumar DOLO'
    },
    {
      icon: 'fa-lock',
      title: 'AUTHENTIFICATION',
      date: '15 Juil 2023',
      description: 'Intégration de l\'authentification OAUTH avec GitHub pour Synchroniser les issues et pull requests.',
      status: 'rejected',
      statusText: 'Rejetée',
      auteur: 'Oumar DOLO'
    }
  ];


  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  goBack(): void {
    //Logique de retour
    this.location.back(); // Retour à la page précédente
    console.log('Navigation retour');
  }

  addNew(): void {
    //logique d'ajout
    this.contributions.push({
      icon: 'fa-plus',
      title: 'NOUVELLE CONTRIBUTION',
      date: new Date().toISOString().split('T')[0],
      description: 'Nouvelle contribution ajoutée.',
      status: 'pending',
      statusText: 'En attente',
      auteur: 'Oumar DOLO'
    });
    console.log('Ajouter une nouvelle contribution');
}

openContributionDetails(contribution: Contribution): void {
  this.router.navigate(['/contribution-details'], {
    state: {
      contributionData: {
        title: contribution.title,
        date: contribution.date,
        description: contribution.description,
        status: contribution.status,
        statusText: contribution.statusText,
        auteur: contribution.auteur,
        icon: contribution.icon
      }
    }
  });
}
}
