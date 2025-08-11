import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.html',
  styleUrls: ['./modal-notification.css'],
  imports: [CommonModule]

})
export class ModalNotificationComponent {
  @Input() notification: any;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  fermer() {
    this.close.emit();
  }
}
function NgModule(arg0: { declarations: any[]; imports: any[]; }): (target: typeof ModalNotificationComponent) => void | typeof ModalNotificationComponent {
  throw new Error('Function not implemented.');
}

