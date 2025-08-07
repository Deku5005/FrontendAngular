import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parametrer-notifications',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './parametrer-notifications.html',
  styleUrls: ['./parametrer-notifications.css']
})
export class ParametrerNotifications {
  notificationForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;

  // Options pour les types de notifications
  notificationTypes = [
    { value: 'INSCRIPTION', label: 'Inscription' },
    { value: 'COMMENTAIRE', label: 'Commentaire' },
    { value: 'GAINCOINS', label: 'Gain de Coins' },
    { value: 'GAINBADGE', label: 'Gain de Badge' },
    { value: 'DEMANDERARTICIPATION', label: 'Demander Participation' },
    { value: 'PROPOSITIONIDEEPROJET', label: 'Proposition d\'Idée de Projet' },
    { value: 'DEMANDECONTRIBUTION', label: 'Demande de Contribution' },
    { value: 'DEMADEACCEPTEE', label: 'Demande Acceptée' },
    { value: 'DEMANDEREJETEE', label: 'Demande Rejetée' },
    { value: 'DEMANDEGESTIONNAIREACCENTEE', label: 'Demande Gestionnaire Acceptée' },
    { value: 'DEMANDEGESTIONNAIREREJETEE', label: 'Demande Gestionnaire Rejetée' },
    { value: 'DEMANDEGESTIONNAIRE', label: 'Demande Gestionnaire' }
  ];

  constructor(private fb: FormBuilder) {
    this.notificationForm = this.fb.group({
      notificationType: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.notificationForm.invalid) {
      this.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // Simuler l'envoi à l'API
    setTimeout(() => {
      console.log('Données envoyées:', this.notificationForm.value);
      this.isSubmitting = false;
      this.showSuccess = true;
      this.notificationForm.reset();

      // Cacher le message après 3 secondes
      setTimeout(() => this.showSuccess = false, 3000);
    }, 1000);
  }

  private markAllAsTouched(): void {
    Object.values(this.notificationForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
