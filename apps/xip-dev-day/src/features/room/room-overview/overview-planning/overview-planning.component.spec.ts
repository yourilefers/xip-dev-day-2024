import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewPlanningComponent } from './overview-planning.component';

describe('OverviewPlanningComponent', () => {
  let component: OverviewPlanningComponent;
  let fixture: ComponentFixture<OverviewPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewPlanningComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
