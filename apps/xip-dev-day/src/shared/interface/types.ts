export interface Room {
  id: string;
  name: string;
  description: string;
}

export interface Booking {
  id: string;
  name: string;
  description: string;
  organiser: string;
  start: Date;
  end: Date;
}
