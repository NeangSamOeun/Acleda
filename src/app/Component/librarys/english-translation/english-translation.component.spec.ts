import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTranslationComponent } from './english-translation.component';

describe('EnglishTranslationComponent', () => {
  let component: EnglishTranslationComponent;
  let fixture: ComponentFixture<EnglishTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishTranslationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
