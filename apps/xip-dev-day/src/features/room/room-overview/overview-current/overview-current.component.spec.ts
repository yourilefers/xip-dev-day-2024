import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewCurrentComponent } from './overview-current.component';

describe('OverviewCurrentComponent', () => {
  let component: OverviewCurrentComponent;
  let fixture: ComponentFixture<OverviewCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewCurrentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
