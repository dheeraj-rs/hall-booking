import { Stall } from '@/types/stall';

// Update all stall sizes to be consistent
const STALL_DIMENSIONS = {
  premium: { width: 220, height: 140 },
  standard: { width: 220, height: 140 },
  economy: { width: 220, height: 140 }
};

export const stalls: Stall[] = [
  {
    id: 1,
    venueId: 1,
    name: "Premium A1",
    size: { width: 4, height: 3 },
    position: { x: 50, y: 50 },
    price: 800,
    description: "Prime corner location with maximum visibility",
    image: "/images/stalls/premium-1.jpg",
    available: true,
    status: "available",
    categoryId: 1
  },
  {
    id: 2,
    venueId: 1,
    name: "Premium A2",
    size: { width: 4, height: 3 },
    position: { x: 50, y: 50 },
    price: 750,
    description: "Premium spot near main entrance",
    image: "/images/stalls/premium-2.jpg",
    available: true,
    status: "available",
    categoryId: 1
  },
  {
    id: 3,
    venueId: 1,
    name: "Standard B1",
    size: { width: 3, height: 3 },
    position: { x: 50, y: 50 },
    price: 500,
    description: "Well-positioned standard stall",
    image: "/images/stalls/standard-1.jpg",
    available: true,
    status: "available",
    categoryId: 2
  },
  {
    id: 4,
    venueId: 1,
    name: "Standard B2",
    size: { width: 3, height: 3 },
    position: { x: 50, y: 50 },
    price: 500,
    description: "Central location with good foot traffic",
    image: "/images/stalls/standard-2.jpg",
    available: false,
    status: "booked",
    categoryId: 2
  },
  {
    id: 5,
    venueId: 1,
    name: "Economy C1",
    size: { width: 2, height: 3 },
    position: { x: 50, y: 50 },
    price: 300,
    description: "Affordable option with basic amenities",
    image: "/images/stalls/economy-1.jpg",
    available: true,
    status: "available",
    categoryId: 3
  },
  {
    id: 6,
    venueId: 2,
    name: "Premium X1",
    size: { width: 4, height: 4 },
    position: { x: 50, y: 50 },
    price: 900,
    description: "Exclusive corner position with enhanced visibility",
    image: "/images/stalls/premium-3.jpg",
    available: true,
    status: "available",
    categoryId: 1
  },
  {
    id: 7,
    venueId: 2,
    name: "Standard Y1",
    size: { width: 3, height: 3 },
    position: { x: 50, y: 50 },
    price: 600,
    description: "Ideal for product demonstrations",
    image: "/images/stalls/standard-3.jpg",
    available: false,
    status: "maintenance",
    categoryId: 2
  },
  {
    id: 8,
    venueId: 3,
    name: "Premium K1",
    size: { width: 4, height: 3 },
    position: { x: 50, y: 50 },
    price: 700,
    description: "Premium spot with artistic lighting",
    image: "/images/stalls/premium-4.jpg",
    available: true,
    status: "available",
    categoryId: 1
  },
  {
    id: 9,
    venueId: 3,
    name: "Standard L1",
    size: { width: 3, height: 3 },
    position: { x: 50, y: 50 },
    price: 450,
    description: "Perfect for art installations",
    image: "/images/stalls/standard-4.jpg",
    available: true,
    status: "available",
    categoryId: 2
  },
  {
    id: 10,
    venueId: 4,
    name: "VIP Suite",
    size: { width: 5, height: 4 },
    position: { x: 50, y: 50 },
    price: 1200,
    description: "Exclusive waterfront positioning with premium amenities",
    image: "/images/stalls/vip-1.jpg",
    available: true,
    status: "available",
    categoryId: 1
  }
];