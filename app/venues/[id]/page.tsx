import { venues } from '@/data/venues';
import { halls } from '@/data/halls';
import { stalls } from '@/data/stalls';
import { notFound } from 'next/navigation';
import VenueDetails from './VenueDetails';

export default function VenueDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const venueId = parseInt(params.id, 10);
  
  if (isNaN(venueId)) {
    notFound();
  }

  const venue = venues.find((v) => v.id === venueId);
  const hall = halls.find((h) => h.venueId === venue?.id);
  const venueStalls = stalls.filter((s) => s.venueId === venue?.id);

  if (!venue) {
    notFound();
  }

  return (
    <VenueDetails 
      venue={venue}
      hall={hall}
      stalls={venueStalls}
    />
  );
}