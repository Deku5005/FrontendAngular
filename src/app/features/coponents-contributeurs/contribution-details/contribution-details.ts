import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Contribution } from '../mes-contributions-contributeurs/mes-contributions-contributeurs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contribution-details',
  standalone: true,
  templateUrl: './contribution-details.html',
  styleUrls: ['./contribution-details.css'],
  imports: [CommonModule, DatePipe, FontAwesomeModule]
})
export class ContributionDetailsComponent {
  contributionData: Contribution | null = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.contributionData = navigation.extras.state['contributionData'];
    }
  }

    getStatusColor(status: string | undefined): string {
    switch(status) {
      case 'approved': return '#d1fae5';
      case 'rejected': return '#fee2e2';
      case 'pending': return '#fef3c7';
      default: return '#e4e2ff';
    }
  }

  getStatusIcon(status: string | undefined): string {
    switch(status) {
      case 'approved': return 'fa-check-circle';
      case 'rejected': return 'fa-times-circle';
      case 'pending': return 'fa-clock';
      default: return 'fa-info-circle';
    }
  }

  closeModal() {
    this.router.navigate(['/mes-contributions-contributeurs']);
  }
}
