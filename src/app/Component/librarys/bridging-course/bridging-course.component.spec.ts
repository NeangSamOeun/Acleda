import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgingCourseComponent } from './bridging-course.component';

describe('BridgingCourseComponent', () => {
  let component: BridgingCourseComponent;
  let fixture: ComponentFixture<BridgingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BridgingCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridgingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
