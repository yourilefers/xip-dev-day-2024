import {Component, CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  providers: [RoomService],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoomComponent {
  readonly #roomService = inject(RoomService);

  constructor() {
    this.#roomService.fetchRoom().subscribe();
    this.#roomService.fetchPlanning().subscribe();
  }
}
