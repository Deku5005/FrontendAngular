import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-domaines',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './domaines.html',
  styleUrl: './domaines.css'
})
export class Domaines {
  faPen = faPen; 
  faTrash = faTrash; 
}