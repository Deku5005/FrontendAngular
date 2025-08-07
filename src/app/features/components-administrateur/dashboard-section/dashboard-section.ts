import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {faCoins, faMedal, faUserGroup} from '@fortawesome/free-solid-svg-icons';
import {IdeeDeProjet} from '../idee-de-projet/idee-de-projet';

@Component({
  selector: 'app-dashboard-section',
  imports: [FaIconComponent, IdeeDeProjet],
  templateUrl: './dashboard-section.html',
  styleUrl: './dashboard-section.css'
})
export class DashboardSection {

  protected readonly faCoins = faCoins;
  protected readonly faMedal = faMedal;
  protected readonly faUserGroup = faUserGroup;
}
