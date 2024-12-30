export interface Venue {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  capacity: number;
  amenities?: string[];
}