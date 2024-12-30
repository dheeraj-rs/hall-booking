'use client';

import { venues } from '@/data/venues';
import { VenueCard } from '@/components/venue/venue-card';

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Available Venues</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </div>
  );
}