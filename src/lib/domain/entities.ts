export interface Testimonial {
  initial: string;
  name: string;
  role: string;
  text: string;
  color: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface LandingData {
  testimonials: Testimonial[];
  faqs: FAQItem[];
  stats: Stat[];
  biblicalPromises: string[];
}
