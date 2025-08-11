import { Component } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import {faEllipsisV, faEye} from '@fortawesome/free-solid-svg-icons';
import { DetailIdeeProjet } from '../detail-idee-projet/detail-idee-projet';
import {PupPopmenu} from '../pup-popmenu/pup-popmenu';
import {FaireDemandeGestionnaire} from '../faire-demande-gestionnaire/faire-demande-gestionnaire';
import {FormAjoutIdee} from '../form-ajout-idee/form-ajout-idee';



@Component({
  selector: 'app-idee-de-projet-contributeurs',
  standalone: true,
  templateUrl: './idee-de-projet-contributeurs.html',
  imports: [CommonModule, FaIconComponent, DetailIdeeProjet, PupPopmenu, FaireDemandeGestionnaire, FormAjoutIdee],
  styleUrl: './idee-de-projet-contributeurs.css'
})
export class IdeeDeProjetContributeursComponent {

  faEye = faEye;
  faEllipsisV = faEllipsisV;

  projets = [
    { nom: 'Système de recommandation' },
    { nom: 'Système de distribution' },
    { nom: 'Application de chat temps réel' },
    { nom: 'Site e-commerce avec gestion de stock, panier, et suivi ...' },
    { nom: 'Système de suivi des ventes et statistiques (tableaux de bord)' },
    { nom: 'Application de domotique pour gérer lumières, température…' },
    { nom: 'Capteurs connectés pour la surveillance agricole' },
    { nom: 'Plateforme de e-learning avec quiz interactifs et suivi des progrès' },
    { nom: 'Application de quiz multijoueur en temps réel' },
    { nom: 'Application de gestion de budget personnel avec graphiques ...' },
    { nom: 'Gestion des stocks avec alertes de rupture' },
    { nom: 'Plateforme de bénévolat reliant associations et volontaires' },
    { nom: 'Application de suivi de santé (pression, glycémie, sommeil)' },
    { nom: 'Assistant nutritionnel qui propose des repas équilibrés selon ...' },
    { nom: 'Système de billetterie pour événements avec QR Code ...' },
    { nom: 'Plateforme de streaming musical avec playlists collaboratives' },
  ];
  projetSelectionne: any = null;

  ouvrirDetail(projet: any) {
    this.projetSelectionne = projet;
  }
  fermerDetail() {
    this.projetSelectionne = null;
  }
  selectedProjet: any = null;
  closeMenu() {
    this.selectedProjet = null;
  }

  voirCommentaires(projet: any) {
    console.log("Voir les commentaires de :", projet);
    this.closeMenu();
  }

  faireDemande(projet: any) {
    console.log("Faire une demande pour :", projet);
    this.closeMenu();
  }

  ajouterCommentaire(projet: any) {
    console.log("Ajouter un commentaire à :", projet);
    this.closeMenu();
  }
  ouvrirMenu(projet: any) {
    this.selectedProjet = projet;
  }

  fermerMenu() {
    this.selectedProjet = null;
  }
  // cas du formulaire d'ajout de projet

  afficherFormulaire = false;

  ouvrirFormulaire() {    this.afficherFormulaire = true;

    this.afficherFormulaire = true;
  }

  fermerFormulaire() {
    this.afficherFormulaire = false;
  }

  ajouterProjetDepuisFormulaire(projet: any) {

    this.fermerFormulaire();
  }




}


