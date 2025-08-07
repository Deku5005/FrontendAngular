import { Component } from '@angular/core';
import { StatsCards } from './stats-cards/stats-cards';
import { SearchBar } from './search-bar/search-bar';
import { RecentProjects } from './recent-projects/recent-projects';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dasboard-contributeur-section',
  imports: [StatsCards, SearchBar, RecentProjects],
  templateUrl: './dasboard-contributeur-section.html',
  styleUrl: './dasboard-contributeur-section.css'
})
export class DasboardContributeurSection {

}
