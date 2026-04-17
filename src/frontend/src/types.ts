export interface Review {
  id: number;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
  text: string;
  location: string;
  isCelebrity?: boolean;
  event?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  isPopular?: boolean;
  badge?: string;
}

export interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description?: string;
}

export interface WhyChoosePoint {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}
