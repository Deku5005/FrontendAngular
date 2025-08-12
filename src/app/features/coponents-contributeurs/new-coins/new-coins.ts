import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-coins',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-coins.html',
  styleUrls: ['./new-coins.css']
})
export class NewCoinsComponent {
  // Propriétés pour le formulaire
  coinsData = {
    amount: 0,
    recipient: ''
  };

  constructor(
    private router: Router,
    private location: Location
  ) {}

  // Soumission du formulaire
  onSubmit() {
    console.log('Données soumises:', this.coinsData);
    // Ici vous ajouterez la logique d'envoi au serveur
    this.router.navigate(['/mes-coins']);
  }

  // Retour à la page précédente
  goBack() {
    this.location.back();
  }
}
