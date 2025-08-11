import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule,FaConfig} from '@fortawesome/angular-fontawesome';
import { SearchBar } from '../dasboard-contributeur-section/search-bar/search-bar';
import { faArrowRight, faEye,faHome , faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ModalNotificationComponent } from './modal-notification/modal-notification';



@Component({
  selector: 'app-notifications',
  imports: [ FormsModule, CommonModule,FontAwesomeModule,SearchBar, ModalNotificationComponent],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class NotificationsComponent  {

     faArrowRight = faArrowRight;
     faEye = faEye;
     faHome = faHome;
     faArrowLeft = faArrowLeft;

     constructor(private location :Location){}

     goBack(): void{
      this.location.back();
      alert("Retour bien recu")
     }

     modalVisible = false;
  notificationSelectionnee: any = null;

  notifications = [
    { titre: "Proposition d'idées", detail: "Voici le détail de la proposition..." },
    { titre: "Nouvelle tâche", detail: "Vous avez une nouvelle tâche assignée." },
  ];

  ouvrirModal(notification: any) {
    this.notificationSelectionnee = notification;
    this.modalVisible = true;
  }

  fermerModal() {
    this.modalVisible = false;
  }

  }


