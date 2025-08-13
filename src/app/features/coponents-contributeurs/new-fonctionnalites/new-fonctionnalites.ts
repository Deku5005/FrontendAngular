import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-fonctionnalites',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-fonctionnalites.html',
  styleUrls: ['./new-fonctionnalites.css']
})
export class  NewFonctionnalites {
  // Propriétés pour le formulaire
  // Propriétés pour le formulaire
  fonctionnaliteData = {
    description: '',
    points: 0,
    status: 'En cours'
  };

  availablePoints = [20, 50, 100, 200, 300]; // Valeurs prédéfinies pour les points

  constructor(
    private router: Router,
    private location: Location
  ) {}

    // Soumission du formulaire
  onSubmit() {
    console.log('Nouvelle fonctionnalité:', this.fonctionnaliteData);
    // Ici vous ajouterez la logique d'envoi au serveur
    this.router.navigate(['/dashboard-gestionnaire']);
  }

  // Retour à la page précédente
  goBack() {
    this.location.back();
  }
}
