import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookmark, faHandshake, faInfoCircle, faTags, faTasks, faTimes, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup-eye',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './popup-eye.html',
  styleUrl: './popup-eye.css'
})
export class PopupEye {

  protected readonly faTimes= faTimes;
  protected readonly faInfoCircle = faInfoCircle;
  protected readonly faTasks= faTasks;
  protected readonly faTags=faTags;
  protected readonly faUserFriends=faUserFriends;
  protected readonly faBookmark= faBookmark;
  protected readonly faHandshake= faHandshake;

  // Inputs: données et état du modal
  @Input() project: any = null;
  @Input() showModal: boolean = false;
  
  // Outputs: événements de fermeture et d'action
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveProject = new EventEmitter<void>();
  @Output() joinProject = new EventEmitter<void>();
  
  // Ferme le popup
  onClose() {
    this.closeModal.emit();
  }
  
  // Enregistre le projet
  onSave() {
    this.saveProject.emit();
  }
  
  // Rejoint le projet
  onJoin() {
    this.joinProject.emit();
  }
  
  // Empêche la fermeture quand on clique à l'intérieur
  preventClose(event: Event) {
    event.stopPropagation();
  }
}
