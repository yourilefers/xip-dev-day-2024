import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../room.service';
import { Booking } from '../../../../shared/interface/types';
import { OverviewBookingComponent } from '../overview-booking/overview-booking.component';

@Component({
  selector: 'app-overview-planning',
  standalone: true,
  imports: [CommonModule, OverviewBookingComponent],
  templateUrl: './overview-planning.component.html',
  styleUrl: './overview-planning.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewPlanningComponent {
  readonly #roomService = inject(RoomService);

  readonly planning$ = this.#roomService.planning$;

  cancelBooking = (booking: Booking) =>
    this.#roomService.cancelBooking(booking);
}
