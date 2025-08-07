import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionComponent } from './contribution';
import { Component } from '@angular/core';

// Si Contribution est un composant Angular, il doit être déclaré avec @Component
@Component({
  selector: 'app-contribution',
  template: '<div>Test</div>'
})
class MockContributionComponent {}

describe('ContributionComponent', () => { // Nom plus précis
  let component: ContributionComponent;
  let fixture: ComponentFixture<ContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributionComponent] // Déclarer le composant à tester
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
