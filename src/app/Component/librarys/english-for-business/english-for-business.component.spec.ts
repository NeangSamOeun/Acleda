import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishForBusinessComponent } from './english-for-business.component';

describe('EnglishForBusinessComponent', () => {
  let component: EnglishForBusinessComponent;
  let fixture: ComponentFixture<EnglishForBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnglishForBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
