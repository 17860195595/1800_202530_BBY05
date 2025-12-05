# ClearWay - Traffic Navigation App

## Overview

ClearWay is a client-side JavaScript web application that helps users navigate through traffic and find optimal routes. The app provides real-time traffic information, route planning, and interactive map features. Users can search for destinations, plan routes, report traffic incidents, and save favorite locations for quick access.

Developed for the COMP 1800 course, this project applies User-Centred Design practices and agile project management, and demonstrates integration with Firebase backend services for user authentication, data storage, and real-time traffic reporting.

---

## Features

### Core Features
- **Interactive Map**: View locations on an interactive map powered by Leaflet and OpenStreetMap
- **Route Planning**: Plan driving routes with distance and duration estimates using OpenRouteService API
- **Location Search**: Search for destinations using Nominatim geocoding API with real-time suggestions
- **Traffic Reporting**: Report traffic incidents (accidents, traffic jams, roadblocks) with location and comments
- **Traffic Alerts**: View nearby traffic reports within a customizable radius (5km, 10km, 15km)
- **Favorite Routes**: Save frequently used routes for quick access
- **User Authentication**: Secure login system using Firebase Authentication
- **Traffic Comments**: Browse and filter public traffic reports by time and type
- **User Profile**: Manage user settings and profile information

### User Experience Features
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Traffic reports update dynamically on the map
- **Distance Filtering**: Filter traffic reports by distance from your location
- **Time-based Filtering**: Filter traffic reports by time (1 day, 1 week, 1 month, custom range)
- **Visual Indicators**: Color-coded traffic markers and congestion alerts

---

## Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with responsive design
- **JavaScript (ES6+)**: Modern JavaScript with modules
- **Web Components**: Custom elements for reusable UI components
- **Bootstrap 5**: UI framework for responsive layouts
- **Leaflet**: Interactive map library
- **Flatpickr**: Date picker for filtering

### Backend & Services
- **Firebase**: 
  - Authentication for user management
  - Firestore for data storage (traffic reports, favorites)
  - Hosting for deployment
- **OpenRouteService API**: Route planning and navigation
- **Nominatim API**: Geocoding and reverse geocoding
- **OpenStreetMap**: Map tiles and geographic data

### Build Tools
- **Vite**: Fast build tool and development server
- **npm**: Package management

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Firebase account (for backend services)
- OpenRouteService API key (for route planning)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 1800_202530_BBY05
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Copy your Firebase configuration to `src/js/firebaseConfig.js`
   - Set up Firestore database with appropriate security rules
   - Enable Firebase Authentication (Email/Password)

4. Configure API Keys:
   - Add your OpenRouteService API key to `src/js/routeDetail.js` (if needed)
   - Nominatim API is used via proxy (no key required)

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Deployment

Deploy to Firebase Hosting:
```bash
npm run deploy
```

Or deploy only hosting:
```bash
npm run deploy:hosting
```

---

## Usage

### Basic Workflow

1. **Login**: Visit the application and log in with your Firebase account
2. **Search**: Use the search bar to find a destination
3. **View Route**: Click on a search result to view route details on the map
4. **Get Location**: Click "Get Location" to use your current location as the starting point
5. **View Traffic**: Traffic reports near your route are automatically displayed
6. **Report Traffic**: Click "Report Traffic" to submit a traffic incident
7. **Save Route**: Click "Save" to add a route to your favorites

### Features Guide

- **Traffic Jam Alert**: View nearby traffic reports within your selected radius
- **Traffic Comments**: Browse all public traffic reports with filtering options
- **Favorites**: Access your saved routes from the favorites page
- **Settings**: Manage your profile and preferences

---

## Project Structure

```
1800_202530_BBY05/
├── index.html                 # Landing page
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── firebase.json             # Firebase configuration
├── README.md                 # This file
│
├── dist/                     # Build output (generated)
│
├── functions/               # Firebase Cloud Functions
│   ├── index.js
│   └── package.json
│
└── src/
    ├── assets/
    │   └── images/          # Image assets (logos, icons, placeholders)
    │
    ├── components/           # Web Components
    │   ├── components.js    # Component registration
    │   ├── js/              # Component logic
    │   │   ├── appFooter.js
    │   │   ├── appNavbar.js
    │   │   ├── appPageHeader.js
    │   │   └── appSearchBar.js
    │   └── styles/          # Component styles
    │       ├── footer.css
    │       ├── navbar.css
    │       ├── pageHeader.css
    │       └── searchbar.css
    │
    ├── js/                   # Application logic
    │   ├── app.js           # Main application entry
    │   ├── authentication.js # Firebase auth handling
    │   ├── firebaseConfig.js # Firebase configuration
    │   ├── favoritesService.js # Favorites management
    │   ├── logInPage.js     # Login page logic
    │   ├── main.js          # Main page (map & traffic)
    │   ├── notifications.js # Toast notifications
    │   ├── profile.js       # User profile management
    │   ├── report.js        # Traffic report submission
    │   ├── routeDetail.js   # Route detail page logic
    │   ├── routingService.js # Route planning service
    │   ├── search.js        # Search functionality
    │   ├── settings.js      # Settings page logic
    │   ├── trafficComments.js # Traffic comments page
    │   └── trafficService.js # Traffic data service
    │
    ├── pages/               # HTML pages
    │   ├── favorateList.html # Favorites list page
    │   ├── login.html       # Login page
    │   ├── main.html        # Main application page
    │   ├── report.html      # Traffic report page
    │   ├── routeDetail.html # Route detail page
    │   ├── search.html      # Search page
    │   ├── settings.html    # Settings page
    │   └── trafficComments.html # Traffic comments page
    │
    ├── styles/              # Global styles
    │   ├── Adams.css        # Custom styles
    │   ├── favoriteList.css
    │   ├── index.css        # Landing page styles
    │   ├── main.css         # Main page styles
    │   ├── report.css       # Report page styles
    │   ├── reset.css        # CSS reset
    │   ├── routeDetail.css  # Route detail styles
    │   ├── search.css       # Search page styles
    │   ├── settings.css     # Settings page styles
    │   └── trafficComments.css # Traffic comments styles
    │
    └── utils/               # Utility functions
        ├── apiHelper.js     # API helper functions
        ├── navigation.js    # Navigation utilities
        └── pathHelper.js    # Path utilities
```

---

## API Integration

### OpenRouteService
- **Purpose**: Route planning and navigation
- **Endpoints**: `/v2/directions/driving-car`
- **Usage**: Calculate driving routes between two points

### Nominatim (OpenStreetMap)
- **Purpose**: Geocoding and reverse geocoding
- **Endpoints**: `/search`, `/reverse`
- **Usage**: Convert addresses to coordinates and vice versa
- **Note**: Accessed via Vite proxy in development, CORS proxy in production

### Firebase Services
- **Authentication**: User login and registration
- **Firestore**: 
  - `trafficReports` collection: Public traffic reports
  - `users/{userId}/favorites` collection: User favorite routes

---

## Development Notes

### Environment Detection
The application automatically detects the environment:
- **Development**: Uses Vite proxy for API calls
- **Production**: Uses CORS proxy services (allorigins.win)

### Code Style
- All comments are in English
- ES6+ modules are used throughout
- Web Components follow standard custom element patterns

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES6+ support
- Geolocation API support recommended

---

## Contributors

- **Adam** - BCIT CST Student, Likes going on hikes.
- **Jiahao(Samon) Zhu** - BCIT CST Student with a passion for user-friendly and cool applications. Fun fact: Loves watching Netflix.
- **Markus** - BCIT CST Student, Likes cooking.

---

## Acknowledgments

- **OpenStreetMap** for map data and tiles
- **Leaflet** for the interactive map library
- **Firebase** for backend infrastructure
- **OpenRouteService** for route planning API
- **Nominatim** for geocoding services
- Code snippets adapted from [Stack Overflow](https://stackoverflow.com/) and [MDN Web Docs](https://developer.mozilla.org/)
- Icons and images from various open-source resources

---

## Limitations and Future Work

### Current Limitations

- Route planning requires API key (demo key included)
- Traffic reports are user-submitted (no real-time traffic data integration)
- Limited offline functionality
- Map features depend on internet connectivity
- Accessibility features can be further improved

### Future Enhancements

- **Real-time Traffic Data**: Integrate with live traffic APIs
- **Offline Mode**: Cache maps and routes for offline use
- **Route Optimization**: Multiple route options with traffic-aware routing
- **Notifications**: Push notifications for traffic alerts
- **Social Features**: Share routes and reports with other users
- **Advanced Filtering**: Filter routes by preferences (fastest, shortest, avoid tolls)
- **Dark Mode**: Better usability in low-light conditions
- **Accessibility**: Enhanced screen reader support and keyboard navigation
- **Performance**: Optimize map rendering for large datasets
- **Mobile App**: Native mobile applications for iOS and Android

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Support

For issues, questions, or contributions, please contact the development team or create an issue in the repository.
