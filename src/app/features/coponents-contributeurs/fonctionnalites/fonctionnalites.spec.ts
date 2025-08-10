import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionDetails } from './contribution-details';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ContributionDetails', () => {
  let component: ContributionDetails;
  let fixture: ComponentFixture<ContributionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContributionDetails,
        RouterTestingModule,
        FontAwesomeModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContributionDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display status colors correctly', () => {
    expect(component.getStatusColor('approved')).toBe('#d1fae5');
    expect(component.getStatusColor('rejected')).toBe('#fee2e2');
    expect(component.getStatusColor('pending')).toBe('#fef3c7');
  });
});
