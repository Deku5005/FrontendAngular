import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeDeProjetContributeurs } from './idee-de-projet-contributeurs';

describe('IdeeDeProjetContributeurs', () => {
  let component: IdeeDeProjetContributeurs;
  let fixture: ComponentFixture<IdeeDeProjetContributeurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeeDeProjetContributeurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeeDeProjetContributeurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
