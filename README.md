# Kenneth Jimmy Portfolio

A modern, minimalist portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Clean Design**: Minimalist layout with a focus on content
- **Responsive**: Works on desktop and mobile devices
- **Modern Tech Stack**: Built with React 19, TypeScript, and Tailwind CSS
- **Professional Look**: Matches the design specification with dark gray and orange accent colors

## Design Elements

- **Header**: Logo, email, settings icon, and navigation menu
- **Hero Section**: 
  - Social media links (LinkedIn, GitHub, Twitter)
  - Introduction with "It's me" speech bubble
  - Name and title
  - Professional description
  - Call-to-action button
  - Profile illustration

## Color Scheme

- **Primary**: Dark Gray (#374151)
- **Accent**: Orange (#f97316)
- **Background**: White
- **Text**: Dark Gray

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header component
│   └── Hero.tsx        # Main hero section component
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles with Tailwind CSS
```

## Technologies Used

- **React 19**: Modern React with latest features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Create React App**: React development environment

## Customization

To customize the portfolio:

1. **Personal Information**: Update the content in `src/components/Hero.tsx`
2. **Contact Details**: Modify email and social links in `src/components/Header.tsx`
3. **Colors**: Adjust the color scheme in `tailwind.config.js`
4. **Styling**: Modify Tailwind classes in the component files

## Deployment

The app can be deployed to any static hosting service:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service of choice (Netlify, Vercel, GitHub Pages, etc.)

## License

This project is open source and available under the [MIT License](LICENSE).
