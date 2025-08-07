import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesContributionsContributeurs } from './mes-contributions-contributeurs';

describe('MesContributionsContributeurs', () => {
  let component: MesContributionsContributeurs;
  let fixture: ComponentFixture<MesContributionsContributeurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesContributionsContributeurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesContributionsContributeurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
