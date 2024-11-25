import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportImportManagementComponent } from './export-import-management.component';

describe('ExportImportManagementComponent', () => {
  let component: ExportImportManagementComponent;
  let fixture: ComponentFixture<ExportImportManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportImportManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportImportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
