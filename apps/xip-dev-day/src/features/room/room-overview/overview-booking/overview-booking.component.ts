import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../../../../shared/interface/types';

@Component({
  selector: 'app-overview-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-booking.component.html',
  styleUrl: './overview-booking.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewBookingComponent {
  @Input()
  booking!: Booking;

  @Output()
  readonly cancel = new EventEmitter<Booking>();

  cancelBooking() {
    this.cancel.emit(this.booking);
  }
}
