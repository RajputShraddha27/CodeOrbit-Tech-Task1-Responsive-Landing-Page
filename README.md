# WanderWay – Travel Agency Landing Page

WanderWay is a modern and responsive travel agency landing page built using React.js, JavaScript, Bootstrap, and CSS. It allows users to explore popular destinations, view tour packages, check special offers, and discover travel services through an attractive and user-friendly interface.

## Live Demo

[[View Live Project](https://codeorbit-task1-responsivelandingpage.netlify.app/)]

## Features

* Responsive navigation bar with mobile menu
* Full-screen travel hero banner
* Call-to-action buttons
* Travel search form UI
* Popular destination cards
* Tour package cards with prices and ratings
* Special discount offer section
* Why Choose Us section
* Customer testimonials
* Newsletter form with email validation
* Contact information and footer
* Smooth scrolling navigation
* Hover effects and CSS transitions
* Responsive design for mobile, tablet, and desktop
* Custom WanderWay favicon
* Back-to-top button

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* React Icons
* Vite

## Responsive Design

The website is tested across multiple screen sizes:

* Mobile: 375px
* Tablet: 768px
* Desktop: 1440px

Bootstrap Grid, CSS Flexbox, CSS Grid, and media queries are used to create the responsive layout.

## Project Structure

```text
src
├── assets
│   ├── hero-travel.jpg
│   ├── goa.jpg
│   ├── manali.jpg
│   ├── jaipur.jpg
│   └── kerala.jpg
├── components
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── TravelSearch.jsx
│   ├── TravelSearch.css
│   ├── Destinations.jsx
│   ├── Destinations.css
│   ├── Packages.jsx
│   ├── Packages.css
│   ├── Offer.jsx
│   ├── Offer.css
│   ├── Features.jsx
│   ├── Features.css
│   ├── Testimonials.jsx
│   ├── Testimonials.css
│   ├── Newsletter.jsx
│   ├── Newsletter.css
│   ├── Footer.jsx
│   └── Footer.css
├── data
│   └── travelData.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Installation and Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Open the project folder:

```bash
cd Task1-Responsive-Landing-Page
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal:

```text
http://localhost:5173/
```

## Production Build

To create a production build, run:

```bash
npm run build
```

## Important Note

This project is a frontend-only landing page created for learning and portfolio purposes.

It does not include:

* Backend server
* Database
* LocalStorage
* User authentication
* Real trip booking
* Online payment
* Live travel search

The search form, booking buttons, social-media buttons, privacy policy, and terms buttons are demonstration UI elements. The newsletter form validates the email and displays a frontend success message, but the email is not stored or sent anywhere.

## Image Credits

The travel images and WanderWay favicon used in this project were created using OpenAI image generation for this project.

## Developer

**Designed and Developed by Rajput Shraddha**