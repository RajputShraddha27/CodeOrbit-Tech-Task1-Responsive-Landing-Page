import goaImage from "../assets/goa.jpg";
import manaliImage from "../assets/manali.jpg";
import jaipurImage from "../assets/jaipur.jpg";
import keralaImage from "../assets/kerala.jpg";

export const destinations = [
  {
    id: 1,
    name: "Goa",
    state: "Goa, India",
    image: goaImage,
    rating: 4.8,
    price: 12999,
  },
  {
    id: 2,
    name: "Manali",
    state: "Himachal Pradesh, India",
    image: manaliImage,
    rating: 4.9,
    price: 15999,
  },
  {
    id: 3,
    name: "Jaipur",
    state: "Rajasthan, India",
    image: jaipurImage,
    rating: 4.7,
    price: 10999,
  },
  {
    id: 4,
    name: "Kerala",
    state: "Kerala, India",
    image: keralaImage,
    rating: 4.9,
    price: 18999,
  },
];

export const packages = [
  {
    id: 1,
    title: "Goa Beach Escape",
    location: "Goa, India",
    image: goaImage,
    duration: "4 Days / 3 Nights",
    groupSize: "2–6 People",
    rating: 4.8,
    reviews: 124,
    oldPrice: 15999,
    price: 12999,
    badge: "Popular",
  },
  {
    id: 2,
    title: "Magical Manali Tour",
    location: "Manali, India",
    image: manaliImage,
    duration: "5 Days / 4 Nights",
    groupSize: "2–8 People",
    rating: 4.9,
    reviews: 156,
    oldPrice: 18999,
    price: 15999,
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "Royal Jaipur Journey",
    location: "Jaipur, India",
    image: jaipurImage,
    duration: "3 Days / 2 Nights",
    groupSize: "2–10 People",
    rating: 4.7,
    reviews: 98,
    oldPrice: 13999,
    price: 10999,
    badge: "20% Off",
  },
  {
    id: 4,
    title: "Kerala Backwater Retreat",
    location: "Kerala, India",
    image: keralaImage,
    duration: "6 Days / 5 Nights",
    groupSize: "2–6 People",
    rating: 4.9,
    reviews: 142,
    oldPrice: 22999,
    price: 18999,
    badge: "Recommended",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "Ahmedabad, Gujarat",
    initials: "AS",
    rating: 5,
    review:
      "Our Manali trip was perfectly planned. The hotel, sightseeing and travel support were excellent throughout the journey.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Mumbai, Maharashtra",
    initials: "PM",
    rating: 5,
    review:
      "WanderWay made our Kerala holiday comfortable and memorable. The houseboat experience was the highlight of our trip.",
  },
  {
    id: 3,
    name: "Rohan Patel",
    location: "Surat, Gujarat",
    initials: "RP",
    rating: 5,
    review:
      "The Goa package offered great value for money. Everything was well-organized and the support team was very helpful.",
  },
];