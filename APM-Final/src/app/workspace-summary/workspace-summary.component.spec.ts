import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSummaryComponent } from './workspace-summary.component';

describe('WorkspaceSummaryComponent', () => {
  let component: WorkspaceSummaryComponent;
  let fixture: ComponentFixture<WorkspaceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
