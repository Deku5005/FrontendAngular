import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faPlus, faMedal, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Badge, BadgesService } from '../../../services/badges.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { NgClass } from '@angular/common';

@Component({
  selector: 'app-badges',
  templateUrl: './parametrer-les-badges.html',
  styleUrls: ['./parametrer-les-badges.css'],
  standalone: true,
  imports: [
    CommonModule,
    FaIconComponent,
    NgClass
  ],
})
export class ParametrerLesBadges implements OnInit {

  badges: Badge[] = [];

  faPlus = faPlus;
  faMedal = faMedal;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private badgesService: BadgesService) {}

  ngOnInit(): void {
    this.loadBadges();
  }

  loadBadges(): void {
    this.badgesService.getAll().subscribe(data => {
      this.badges = data;
    });
  }

  supprimerBadge(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce badge ?')) {
      this.badgesService.delete(id).subscribe(() => {
        this.badges = this.badges.filter(b => b.idBadge !== id);
      });
    }
  }
}
