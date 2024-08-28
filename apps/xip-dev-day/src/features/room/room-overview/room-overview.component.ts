import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverviewCurrentComponent} from "./overview-current/overview-current.component";
import {OverviewPlanningComponent} from "./overview-planning/overview-planning.component";

@Component({
  selector: 'app-room-overview',
  standalone: true,
  imports: [CommonModule, OverviewCurrentComponent, OverviewPlanningComponent],
  templateUrl: './room-overview.component.html',
  styleUrl: './room-overview.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoomOverviewComponent {}
