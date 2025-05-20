# Frontend Developer Intern Screening Assignment

## Project Overview
This project is a simplified recreation of the website [https://better-take-home.vercel.app](https://better-take-home.vercel.app). The website includes the following pages and features:

- **Home Page**: A visually engaging landing page with a prominent header, hero section, and a call-to-action (CTA).
- **About Page**: A clean layout describing the purpose of the website with dummy content about its mission, goals, or services.
- **Mortgage Calculator Page**: A functional calculator allowing users to input parameters like home price, down payment, interest rate, taxes, and zip code, displaying monthly payment estimates and a breakdown (principal, interest, taxes).
- **Start Page**: A user-friendly page with a simple form or button to initiate a mortgage application process.

The project is hosted on [Vercel] and is fully responsive and accessible.

## Live Demo
https://better-simplified.vercel.app/

## GitHub Repository
https://github.com/shramana263/Tellis-Tech-PvtLtd-Website-simplification

## Technologies Used
- **React**: For building the user interface with functional components and hooks.
- **React Router**: For client-side routing between pages.
- **Redux**: For state management across the application.
- **[Tailwind CSS]**: For styling the UI.
- **[Vercel]**: For deployment.

## Prerequisites
Before running the project locally, ensure you have the following installed:
- **Node.js** (version 16 or higher recommended)
- **npm** or **yarn** (package managers)
- A modern web browser (e.g., Chrome, Firefox)

## Installation and Setup
Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shramana263/Tellis-Tech-PvtLtd-Website-simplification.git
   cd Tellis-Tech-PvtLtd-Website-simplification
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   Using npm:
   ```bash
   npm start
   ```
   Or using yarn:
   ```bash
   yarn start
   ```
   The application will start at `http://localhost:5173` (or another port if 5173 is occupied).

4. **Build for Production**:
   To create a production-ready build:
   ```bash
   npm run build
   ```
   Or using yarn:
   ```bash
   yarn build
   ```

## Project Structure
```
Tellis-Tech-PvtLtd-Website-simplification/
├── node_modules/            # Project dependencies
├── public/                  # Static assets
│   └── index.html           # Main HTML file
├── src/                     # Source code
│   ├── app/                 # App-related files
│   │   ├── About.tsx        # About page component
│   │   ├── calculator/      # Mortgage calculator page
│   │   │   ├── MortgageCalculator.tsx
│   │   │   └── home.tsx     # Likely a subcomponent for the calculator
│   │   ├── StartPage.tsx    # Start page component
│   │   ├── Home.tsx         # Home page component
│   │   ├── Layout.tsx       # Layout component for shared UI
│   │   └── NotFound.tsx     # 404 page component
│   ├── assets/              # Assets like images, fonts, etc.
│   │   └── components/      # Reusable UI components
│   │       ├── ui/          # UI component subdirectory
│   │       │   ├── button.tsx
│   │       │   ├── card.tsx
│   │       │   ├── checkbox.tsx
│   │       │   ├── input.tsx
│   │       │   ├── label.tsx
│   │       │   ├── radio-group.tsx
│   │       │   ├── slider.tsx
│   │       │   └── tabs.tsx
│   │       ├── CallToAction.tsx
│   │       ├── FeatureHighlights.tsx
│   │       ├── Footer.tsx
│   │       ├── Hero.tsx
│   │       ├── Navbar.tsx
│   │       ├── Questions.tsx
│   │       ├── Testimonials.tsx
│   │       ├── ThemeProvider.tsx
│   │       ├── TrustedBy.tsx
│   │       └── WhyBetter.tsx
│   ├── lib/                 # Utility libraries or functions
│   │   ├── App.css          # App-specific styles
│   │   ├── App.tsx          # Main App component
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # Entry point for React
│   ├── components.json      # Component configuration
│   ├── eslint.config.js     # ESLint configuration
│   ├── .env                 # Environment variables
│   ├── .gitignore           # Git ignore file
│   └── README.md            # This file
```

## Notes
- The project adheres to best practices for clean, readable, and maintainable code.
- The UI is fully responsive, tested across mobile, tablet, and desktop devices.
- Accessibility features (e.g., ARIA labels, keyboard navigation) are implemented where applicable.
- The mortgage calculator uses basic formulas for monthly payment estimates. For production, consider integrating a more robust calculation library or API.
- If you encounter any issues, ensure all dependencies are installed correctly and check for port conflicts when running the development server.

## Troubleshooting
- **Dependency Issues**: Run `npm install` or `yarn install` again to ensure all dependencies are installed.
- **Port Conflicts**: If `localhost:5173` is in use, the development server will prompt you to use another port.
- **Build Errors**: Ensure your Node.js version is compatible and clear the `node_modules` folder before reinstalling dependencies.

## Contact
For any questions or issues, please reach out via shramanashow@gmail.com or open an issue on the GitHub repository.
