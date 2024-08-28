import { Route } from '@angular/router';

const routes: Array<Route> = [
  {
    path: '',
    loadComponent: () =>
      import('./room/room.component').then((m) => m.RoomComponent),
    loadChildren: () => [
      {
        path: '',
        loadComponent: () =>
          import('./room-overview/room-overview.component').then((m) => m.RoomOverviewComponent),
      },
    ],
  },
];

export default routes;
