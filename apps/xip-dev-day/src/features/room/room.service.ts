import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, of } from 'rxjs';
import dayjs from 'dayjs';
import { Booking, Room } from '../../shared/interface/types';

@Injectable()
export class RoomService {
  readonly #roomSubject = new BehaviorSubject<Room | null>(null);

  readonly #planningSubject = new BehaviorSubject<Array<Booking>>([]);

  readonly room$ = this.#roomSubject.asObservable().pipe(
    filter((room) => !!room),
    map((room) => room as Room),
  );

  readonly planning$ = this.#planningSubject
    .asObservable()
    .pipe(
      map((planning) =>
        planning.sort((a, b) => a.start.getTime() - b.start.getTime()),
      ),
    );

  fetchRoom() {
    this.#roomSubject.next({
      id: '1',
      name: 'Room 1',
      description: 'This is an example room.',
    });

    return of(this.#roomSubject.value);
  }

  fetchPlanning() {
    this.#planningSubject.next([
      {
        id: '1',
        name: 'Meeting 1',
        description: 'This is an example meeting.',
        organiser: 'John Doe',
        start: dayjs().set('minute', 0).add(1, 'hour').toDate(),
        end: dayjs().set('minute', 0).add(2, 'hour').toDate(),
      },
      {
        id: '2',
        name: 'Meeting 2',
        description: 'This is an example meeting.',
        organiser: 'Someone else',
        start: dayjs().set('minute', 0).add(2, 'hour').toDate(),
        end: dayjs().set('minute', 0).add(2, 'hour').add(30, 'minute').toDate(),
      },
      {
        id: '3',
        name: 'Meeting 3',
        description: 'This is an example meeting.',
        organiser: 'Someone else',
        start: dayjs().set('minute', 0).add(3, 'hour').toDate(),
        end: dayjs().set('minute', 0).add(3, 'hour').add(45, 'minute').toDate(),
      },
    ]);

    return of(this.#planningSubject.value);
  }

  cancelBooking(booking: Booking) {
    const bookings = this.#planningSubject.value;

    this.#planningSubject.next([
      ...bookings.filter((b) => b.id !== booking.id)
    ]);
  }

  reserveRoom() {
    this.#planningSubject.next([
      ...this.#planningSubject.value,
      {
        id: '4',
        name: 'Meeting 4',
        description: 'some ad-hoc meeting.',
        organiser: 'Current user',
        start: dayjs().toDate(),
        end: dayjs().set('minute', 0).add(1, 'hour').toDate(),
      },
    ]);
  }
}
