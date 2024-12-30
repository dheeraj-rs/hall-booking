export interface Hall {
  id: number;
  venueId: number;
  name: string;
  capacity: number;
  description: string;
  image: string;
  price: number;
}

export interface StallCategory {
  id: number;
  name: string;
  basePrice: number;
  color: string;
}