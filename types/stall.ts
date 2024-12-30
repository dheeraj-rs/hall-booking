export interface Stall {
  id: number;
  venueId: number;
  name: string;
  size: { width: number; height: number };
  position: { x: number; y: number };
  price: number;
  description: string;
  image: string;
  available: boolean;
  status: 'available' | 'booked' | 'maintenance';
  categoryId?: number;
}

export interface StallBooking {
  id: number;
  stallId: number;
  userId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}