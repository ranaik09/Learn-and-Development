// This file contains TypeScript type definitions used throughout the project.

export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    message: string;
}

export interface PricingOption {
    id: string;
    title: string;
    price: string;
    features: string[];
}

export interface Logo {
    id: string;
    src: string;
    alt: string;
}

export interface ValueProp {
    id: string;
    title: string;
    description: string;
}