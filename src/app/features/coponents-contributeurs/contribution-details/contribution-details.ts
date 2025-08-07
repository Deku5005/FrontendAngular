import { Contribution } from './../contribution/contribution';
import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contribution-modal',
  standalone: true,
  templateUrl: './contribution-details.html',
  styleUrls: ['./contribution-details.css'],
  imports: [CommonModule, DatePipe] // Import CommonModule for Angular directives and DatePipe for date formatting
})

export class ContributionModalComponent {
  contributionData: any;
  codeSnippet: string = '';

  constructor(private router: Router) {
    // Récupération des données passées en navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.contributionData = navigation.extras.state['contributionData'];
    }
  }

  closeModal() {
    this.router.navigate(['/contributions']); // Retour à la liste
  }
}
