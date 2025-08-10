import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Contribution } from '../mes-contributions-contributeurs/mes-contributions-contributeurs';

@Component({
  selector: 'app-contribution-details',
  standalone: true,
  templateUrl: './contribution-details.html',
  styleUrls: ['./contribution-details.css'],
  imports: [CommonModule, DatePipe]
})
export class ContributionDetailsComponent {
  contributionData: Contribution | null = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.contributionData = navigation.extras.state['contributionData'];
    }
  }

  closeModal() {
    this.router.navigate(['/mes-contributions-contributeurs']);
  }
}
