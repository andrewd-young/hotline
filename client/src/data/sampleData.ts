export interface Service {
  name: string;
  price: number;
  description?: string;
  images?: string[];
}

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
  services?: Service[]; // Added services property
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
    bio: "Hello! I'm a third-year student at Northeastern University with a passion for hair styling. I started doing hair when I was 15 and have been perfecting my craft ever since. I specialize in creative coloring, modern cuts, and styling for special events. I believe everyone deserves to feel confident and beautiful, and I love being part of that transformation journey!",
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
      },
      {
        id: '2',
        rating: 4,
        text: 'Great service!',
        author: 'John D.',
        date: '2024-02-16',
      },
      {
        id: '3',
        rating: 4,
        text: 'Very satisfied with my haircut.',
        author: 'Alice S.',
        date: '2024-02-17',
      },
      {
        id: '4',
        rating: 5,
        text: 'Loved the styling and vibe.',
        author: 'Mark T.',
        date: '2024-02-18',
      },
    ],
    email: 'sarah.johnson@northeastern.edu',
    services: [
      {
        name: 'Haircut',
        price: 30,
        description: 'Custom cuts for all hair types with shaping, trimming, and personal consultation.',
        images: [
          'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
          'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11',
        ]
      },
      {
        name: 'Coloring',
        price: 50,
        description: 'Vibrant coloring options including balayage, highlights, and full head dye.',
        images: [
          'https://images.unsplash.com/photo-1560869713-da86a9ec0744',
          'https://images.unsplash.com/photo-1597462265018-9ec3a67b9efb',
        ]
      },
      {
        name: 'Styling',
        price: 40,
        description: 'Event-ready styles, blowouts, and custom looks for every hair type.',
        images: [
          'https://images.unsplash.com/photo-1504198458649-3128b932f49b',
          'https://images.unsplash.com/photo-1603386329225-868f8590b5b6',
        ]
      }
    ]
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
    bio: "Hi there! As a certified nail technician and current Northeastern student, I bring both technical expertise and creative flair to every appointment. I started my nail art journey 5 years ago and have developed a unique style that combines classic techniques with modern trends. I'm particularly known for my detailed hand-painted designs and long-lasting applications.",
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
    email: 'emily.davis@northeastern.edu',
    services: [
      {
        name: 'Haircut',
        price: 30,
        description: 'Custom cuts for all hair types with shaping, trimming, and personal consultation.',
        images: [
          'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
          'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11',
        ]
      },
      {
        name: 'Coloring',
        price: 50,
        description: 'Vibrant coloring options including balayage, highlights, and full head dye.',
        images: [
          'https://images.unsplash.com/photo-1560869713-da86a9ec0744',
          'https://images.unsplash.com/photo-1597462265018-9ec3a67b9efb',
        ]
      },
      {
        name: 'Styling',
        price: 40,
        description: 'Event-ready styles, blowouts, and custom looks for every hair type.',
        images: [
          'https://images.unsplash.com/photo-1504198458649-3128b932f49b',
          'https://images.unsplash.com/photo-1603386329225-868f8590b5b6',
        ]
      }
    ]
  }
]; 