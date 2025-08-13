import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewFonctionnalites } from './new-fonctionnalites';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('NewFonctionnalites', () => {
  let component: NewFonctionnalites;
  let fixture: ComponentFixture<NewFonctionnalites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFonctionnalites, FormsModule],
      providers: [
        provideHttpClient(),
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFonctionnalites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
