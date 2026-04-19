import React from 'react';

export interface CardData {
  id: string;
  name: string;
  neighborhood: string;
  priceRange?: string;
  tags: string[];
  icon: React.ReactNode;
  details: string[];
  location?: string;
  atmosphere?: string;
  cost?: string;
  quietLevel?: string;
  wifi?: boolean;
  outlets?: boolean;
}
