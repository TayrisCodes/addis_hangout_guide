import React from 'react';
import { Coffee, Trophy, BookOpen, Wallet } from 'lucide-react';
import { CardData } from './types';

/**
 * MOCK DATA: Sources gathered from local Addis Ababa explorers.
 * These are current high-traffic spots for the youth of the capital.
 */

export const CAFES_DATA: CardData[] = [
  {
    id: 'cafe-1',
    name: 'Tomoca Coffee',
    neighborhood: 'Piassa',
    priceRange: '200 - 400 ETB',
    tags: ['Legendary', 'Authentic'],
    icon: <Coffee className="w-5 h-5" />,
    details: ['Best Macchiato', 'Historic Vibe']
  },
  {
    id: 'cafe-2',
    name: 'Kaldi\'s Coffee',
    neighborhood: 'Bole',
    priceRange: '300 - 600 ETB',
    tags: ['Free WiFi', 'Cozy'],
    icon: <Coffee className="w-5 h-5" />,
    details: ['Community Hub', 'Extensive Menu']
  },
  {
    id: 'cafe-3',
    name: 'Mojo Coffee',
    neighborhood: 'Sarbet',
    priceRange: '250 - 500 ETB',
    tags: ['Artistic', 'Garden'],
    icon: <Coffee className="w-5 h-5" />,
    details: ['Quiet Atmosphere', 'Roastery']
  }
];

export const FOOTBALL_DATA: CardData[] = [
  {
    id: 'foot-1',
    name: 'The Vault',
    neighborhood: 'Bole Medhanealem',
    atmosphere: 'Loud Crowd',
    tags: ['Premier League', 'Social'],
    icon: <Trophy className="w-5 h-5" />,
    details: ['Giant Screens', 'Great Snacks'],
    location: 'Near Medhanealem Mall'
  },
  {
    id: 'foot-2',
    name: 'Cheers Bar',
    neighborhood: 'Atlas',
    atmosphere: 'Energetic',
    tags: ['Champions League', 'Big Screens'],
    icon: <Trophy className="w-5 h-5" />,
    details: ['Draft Beer', 'Intense Vibes'],
    location: 'Atlas Area'
  }
];

export const STUDY_DATA: CardData[] = [
  {
    id: 'study-1',
    name: 'Wired Cafe',
    neighborhood: 'Kazanchis',
    quietLevel: 'Very Quiet',
    wifi: true,
    outlets: true,
    tags: ['Digital Nomad', 'Fast WiFi'],
    icon: <BookOpen className="w-5 h-5" />,
    details: ['Productive', 'Laptop Friendly']
  },
  {
    id: 'study-2',
    name: 'Abyssinia Library Space',
    neighborhood: 'Bole Road',
    quietLevel: 'Silent',
    wifi: true,
    outlets: true,
    tags: ['Deep Work', 'Peaceful'],
    icon: <BookOpen className="w-5 h-5" />,
    details: ['Dedicated Desks', 'Filter Coffee']
  }
];

export const BUDGET_DATA: CardData[] = [
  {
    id: 'budget-1',
    name: 'Yod Abyssinia (Lunch)',
    neighborhood: 'Bole',
    cost: '200 - 450 ETB',
    tags: ['Cultural', 'Large Groups'],
    icon: <Wallet className="w-5 h-5" />,
    details: ['Traditional Buffet', 'Affordable Lunch']
  },
  {
    id: 'budget-2',
    name: 'Shola Market Street Food',
    neighborhood: 'Shola',
    cost: '100 - 250 ETB',
    tags: ['Cheap Eats', 'Authentic'],
    icon: <Wallet className="w-5 h-5" />,
    details: ['Best Sambusas', 'Vibrant Scene']
  }
];
