import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSciencesComponent } from './social-sciences.component';

describe('SocialSciencesComponent', () => {
  let component: SocialSciencesComponent;
  let fixture: ComponentFixture<SocialSciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialSciencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
