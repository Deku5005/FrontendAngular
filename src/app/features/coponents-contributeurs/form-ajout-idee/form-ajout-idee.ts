import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-ajout-idee',
  templateUrl: './form-ajout-idee.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./form-ajout-idee.css'] // si tu as du style séparé
})
export class FormAjoutIdee {
  @Output() annuler = new EventEmitter<void>();
  @Output() projetCree = new EventEmitter<any>();

  // modèle pour ton formulaire
  nouveauProjet = {
    titre: '',
    description: '',
    domaine: '',
    difficulte: '',
    leguer: false,
  };

  // méthode appelée au clic sur "Soumettre l'idée"
  soumettre() {
    // validation simple
    if (!this.nouveauProjet.titre.trim()) {
      alert('Le titre est obligatoire');
      return;
    }
    // on émet l'événement avec le projet créé
    this.projetCree.emit({ ...this.nouveauProjet });
  }

  // méthode appelée au clic sur "Annuler" ou sur la croix
  annulerFormulaire() {
    this.annuler.emit();
  }
}
