import { Button } from '@/components/ui/button';
import { Building2, Calendar, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">HallBook</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/venues" className="text-muted-foreground hover:text-foreground">
              Venues
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Perfect Venue
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find and book the perfect hall or stall for your next event. Simple, secure, and hassle-free booking system.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <Button size="lg" asChild>
                <Link href="/venues">Browse Venues</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/list-venue">List Your Venue</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
                <p className="text-muted-foreground">
                  Find venues across UAE with detailed information and virtual tours
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Booking</h3>
                <p className="text-muted-foreground">
                  Check availability and book instantly with our real-time system
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vendor Dashboard</h3>
                <p className="text-muted-foreground">
                  Manage your venues, bookings, and analytics all in one place
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/venues" className="text-muted-foreground hover:text-foreground">
                    Find Venues
                  </Link>
                </li>
                <li>
                  <Link href="/list-venue" className="text-muted-foreground hover:text-foreground">
                    List Your Venue
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 HallBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}