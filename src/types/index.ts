// Shared TypeScript types for the Sanskar Hotel website

export interface ScrollToSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export interface Award {
  id: number;
  name: string;
  category: string;
  icon: string;
  year: string;
}

export interface SpecialOffer {
  id: number;
  title: string;
  discount: string;
  description: string;
  features: string[];
  validUntil: string;
  code: string;
}

export interface Room {
  id: number;
  name: string;
  price: string;
  image: string;
  features: string[];
}

export interface Amenity {
  icon: string;
  name: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
}

export interface PaymentMethod {
  name: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}