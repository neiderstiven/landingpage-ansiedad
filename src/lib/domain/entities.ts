export interface Testimonial {
  readonly initial: string;
  readonly name: string;
  readonly role: string;
  readonly text: string;
  readonly color: string;
}

export interface FAQItem {
  readonly q: string;
  readonly a: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface LandingData {
  readonly testimonials: readonly Testimonial[];
  readonly faqs: readonly FAQItem[];
  readonly stats: readonly Stat[];
  readonly biblicalPromises: readonly string[];
}
