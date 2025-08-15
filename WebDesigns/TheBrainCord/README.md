# Marketing Site

This project is a marketing website built with Next.js, showcasing services and products offered by the company. It includes various pages such as Home, Services, Products, About, Blog, Case Studies, and Contact.

## Project Structure

The project is organized as follows:

```
marketing-site
├── src
│   ├── pages
│   │   ├── _app.tsx          # Custom App component for global styles and state management
│   │   ├── index.tsx         # Home page with Hero and Value Props components
│   │   ├── services          # Services page showcasing offered services
│   │   │   └── index.tsx
│   │   ├── products          # Products page showcasing offered products
│   │   │   └── index.tsx
│   │   ├── about.tsx        # About page with company/project information
│   │   ├── blog              # Blog page listing posts or articles
│   │   │   └── index.tsx
│   │   ├── case-studies      # Case Studies page showcasing various case studies
│   │   │   └── index.tsx
│   │   └── contact.tsx       # Contact page with Contact Form component
│   ├── components            # Reusable components for the application
│   │   ├── Layout
│   │   │   ├── Header.tsx    # Header component with navigation links
│   │   │   ├── Footer.tsx     # Footer component with copyright and links
│   │   │   └── ThemeProvider.tsx # Theme provider for managing application theme
│   │   ├── Hero.tsx          # Hero component for the Home page
│   │   ├── ValueProps.tsx    # Component highlighting key value propositions
│   │   ├── Testimonial.tsx    # Component displaying customer testimonials
│   │   ├── PricingTable.tsx   # Component presenting pricing options
│   │   ├── LogoCloud.tsx      # Component showcasing partner/client logos
│   │   ├── CTA.tsx            # Call to Action component for user engagement
│   │   └── ContactForm.tsx    # Component for user inquiries
│   ├── styles                 # Styles for the application
│   │   ├── globals.css        # Global CSS styles
│   │   └── theme.ts           # Theme-related constants and styles
│   └── types                  # TypeScript type definitions
│       └── index.d.ts
├── public                     # Public assets
│   └── favicon.ico            # Favicon for the application
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
├── next.config.js             # Next.js configuration settings
└── README.md                  # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd marketing-site
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.