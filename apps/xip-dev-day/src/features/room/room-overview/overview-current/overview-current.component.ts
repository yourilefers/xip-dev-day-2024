import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs';
import { RoomService } from '../../room.service';
import { OverviewBookingComponent } from '../overview-booking/overview-booking.component';
import { Booking } from '../../../../shared/interface/types';

@Component({
  selector: 'app-overview-current',
  standalone: true,
  imports: [CommonModule, OverviewBookingComponent],
  templateUrl: './overview-current.component.html',
  styleUrl: './overview-current.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewCurrentComponent {
  readonly #roomService = inject(RoomService);

  readonly planning$ = this.#roomService.planning$;

  readonly room$ = this.#roomService.room$;

  readonly currentReservation$ = this.planning$.pipe(
    map((planning) =>
      planning.filter(
        (booking) =>
          booking.start.getTime() <= Date.now() &&
          booking.end.getTime() > Date.now(),
      ),
    ),
    map((planning) => planning[0]),
  );

  readonly isReserved$ = this.currentReservation$.pipe(
    map((planning) => !!planning),
  );

  reserveRoom = () => {
    this.#roomService.reserveRoom();
  };

  cancelBooking = (booking: Booking) =>
    this.#roomService.cancelBooking(booking);
}
