import { venues } from '@/data/venues';
import type { Venue } from '@/types/venue';

export function generateStaticParams() {
    return venues.map((venue: Venue) => ({
      id: venue.id.toString(),
    }));
}