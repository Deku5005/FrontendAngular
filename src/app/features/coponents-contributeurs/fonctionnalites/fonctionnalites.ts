import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fonctionnalites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fonctionnalites.html',
  styleUrls: ['./fonctionnalites.css']
})
export class FonctionnalitesComponent {
  features = [
    { id: 1, description: 'Mode sombre / clair : Thèmes personnalisables.' },
    { id: 2, description: 'Notifications : Alertes en temps réel, push notifications, email, SMS.' },
    { id: 3, description: 'Commentaires / likes / partages : Interaction entre utilisateurs.' },
    { id: 4, description: 'Navigation fluide : Menus, barres de recherche, onglets.' },
    { id: 5, description: 'Tableau de bord (Dashboard) : Vue d\'ensemble pour l\'utilisateur.' },
    { id: 6, description: 'Messagerie : Chat privé ou de groupe.' },
    { id: 7, description: 'Messagerie : Chat privé ou de groupe.' }
  ];

  constructor(private router: Router) {} // Injection correcte du Router


  navigateToContributions() {
    this.router.navigate(['/MesContributionsContributeurs']);
  }
}
