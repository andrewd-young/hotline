export interface Hotliner {
  id: string;
  name: string;
  title: string;
  category: string;
  rating: number;
  imageUrl: string;
  location: string;
  distance?: string;
  price: number;
  bio?: string;
  workImages?: string[];
  reviews?: {
    id: string;
    rating: number;
    text: string;
    author: string;
    date: string;
    image?: string;
  }[];
  email: string;
}

export const hotliners: Hotliner[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Hair Stylist',
    category: 'Hair',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1556229165-8aa0ceaa93a7',
    location: 'Northeastern University',
    distance: '0.5 miles away',
    price: 45,
    bio: 'Passionate hair stylist with 3 years of experience. Specializing in creative coloring and modern cuts. Making everyone feel beautiful is my mission!',
    workImages: [
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11',
      'https://images.unsplash.com/photo-1560869713-da86a9ec0744',
    ],
    reviews: [
      {
        id: '1',
        rating: 5,
        text: 'Amazing work! Sarah really understood what I wanted and delivered perfectly.',
        author: 'Emily R.',
        date: '2024-02-15',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15'
      }
    ],
    email: 'sarah.johnson@northeastern.edu'
  },
  {
    id: '2',
    name: 'Emily Davis',
    title: 'Nail Artist',
    category: 'Nails',
    rating: 4.5,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1703343320234-4c1a75b3ff13',
    location: 'Northeastern University',
    distance: '0.8 miles away',
    price: 30,
    bio: 'Certified nail technician specializing in artistic designs and nail health. Making your hands and feet look their best!',
    workImages: [
      'https://images.unsplash.com/photo-1610992015732-2449b0dd2b3f',
      'https://images.unsplash.com/photo-1610992015904-e5b3c7ad8d27',
    ],
    reviews: [
      {
        id: '1',
        rating: 4,
        text: 'Great attention to detail and very professional service.',
        author: 'Sophie M.',
        date: '2024-02-10',
      }
    ],
    email: 'emily.davis@northeastern.edu'
  }
]; 