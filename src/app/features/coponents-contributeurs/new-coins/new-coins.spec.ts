import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCoins } from './new-coins';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('NewCoins', () => {
  let component: NewCoins;
  let fixture: ComponentFixture<NewCoins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCoins, FormsModule],
      providers: [
        provideHttpClient(),
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCoins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  });


