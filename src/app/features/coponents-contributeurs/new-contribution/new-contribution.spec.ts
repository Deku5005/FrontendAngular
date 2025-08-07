import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContribution } from './new-contribution';

describe('NewContribution', () => {
  let component: NewContribution;
  let fixture: ComponentFixture<NewContribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewContribution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContribution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
