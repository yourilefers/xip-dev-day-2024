import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewBookingComponent } from './overview-booking.component';

describe('OverviewBookingComponent', () => {
  let component: OverviewBookingComponent;
  let fixture: ComponentFixture<OverviewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
