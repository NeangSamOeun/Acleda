import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingEnglishComponent } from './teaching-english.component';

describe('TeachingEnglishComponent', () => {
  let component: TeachingEnglishComponent;
  let fixture: ComponentFixture<TeachingEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachingEnglishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
