import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard-gestinnaire',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './dashboard-gestionnaire.html',
  styleUrls: ['./dashboard-gestionnaire.css']
})
export class DashboardGestionnaire {

  constructor(private router: Router, private location: Location) {}
  activeTab: string = 'contributions';

  // Liste des contributions
contributions = [
  {
    id: 1,
    icon: 'fa-user',
    title: 'Authentication',
    date: '15 Juil 2023',
    description: '...',
    status: 'pending',
    statusText: 'En attente',
    auteur: 'Djènèba Haïdara',
  },
  {
    id: 2,
    icon: 'fa-file-alt',
    title: 'Inscription',
    date: '20 Juil 2023',
    description: '...',
    status: 'pending',
    statusText: 'En attente',
    auteur: 'Aïssata Koné'
  },
  {
    id: 3,
    icon: 'fa-sign-in-alt',
    title: 'Connexion',
    date: '25 Juil 2023',
    description: '...',
    status: 'pending',
    statusText: 'En attente',
    auteur: 'Oumar Dolo'
  },
];

  // Liste des demandes
  demandes = [
    { id: 1, auteur: 'Djèneba Haïdara', type: 'Demande à être Gestionnaire' },
    { id: 2, auteur: 'Aïssata Koné', type: 'Demande de contribution' },
    { id: 3, auteur: 'Oumar Dolo', type: 'Demande de contribution' },
    { id: 4, auteur: 'Daba Diallo', type: 'Demande de contribution' },
    { id: 5, auteur: 'Mamoutou Sangaré', type: 'Demande de contribution' }
  ];

  // Liste des fonctionnalités
  fonctionnalites = [
    { id: 1, description: 'Authentification : Inscription, connexion, réinitialisation de mot de passe', status: 'En cours', points: 100 },
    { id: 2, description: 'Mode sombre / clair : Thèmes personnalisables', status: 'En cours', points: 100 },
    { id: 3, description: 'Notifications : Alertes en temps réel, push notifications, email, SMS', status: 'Terminé', points: 300 },
    { id: 4, description: 'Commentaires / likes / partages : Interaction entre utilisateurs', status: 'Pas commencé', points: 300 },
    { id: 5, description: 'Navigation fluide : Menus, barres de recherche, onglets', status: 'Terminé', points: 200 },
    { id: 6, description: 'Tableau de bord (Dashboard) : Vue d\'ensemble pour l\'utilisateur', status: 'Terminé', points: 200 },
    { id: 7, description: 'Messagerie : Chat privé ou de groupe', status: 'En cours', points: 300 }
  ];

  // Liste des coins
  coins = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 10 },
    { id: 4, amount: 75 },
    { id: 5, amount: 15 },
    { id: 6, amount: 45 },
    { id: 7, amount: 95 }
  ];

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

addNew(): void {
  if (this.activeTab === 'fonctionnalites') {
    this.router.navigate(['/new-fonctionnalites']);
  } else if (this.activeTab === 'coins') {
    this.router.navigate(['/new-coins']);
  }
}

  goback(): void {
    this.location.back();
  }

  valider(item: any): void {
    // Logique de validation
    console.log('Valider', item);
  }

  refuser(item: any): void {
    // Logique de refus
    console.log('Refuser', item);
  }

  modifierCoins(item: any): void {
    // Logique de modification des coins
    console.log('Modifier coins', item);
  }

  supprimerCoins(item: any): void {
  // Logique de suppression des coins
  console.log('Supprimer coins', item);
  this.coins = this.coins.filter(coin => coin.id !== item.id);
}
}
