# Elmo Hikes


## Overview
Elmo Hikes is a client-side JavaScript web application that helps users discover and explore hiking trails. The app displays a curated list of hike trails, each with details such as name, location, difficulty, and an image. Users can browse the list and mark their favorite trails for easy access later.

Developed for the COMP 1800 course, this project applies User-Centred Design practices and agile project management, and demonstrates integration with Firebase backend services for storing user favorites.

---


## Features

- Browse a list of curated hiking trails with images and details
- Mark and unmark trails as favorites
- View a personalized list of favorite hikes
- Responsive design for desktop and mobile

---


## Technologies Used

Example:
- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Backend**: Firebase for hosting
- **Database**: Firestore

---


## Usage

1. Open your browser and visit `http://localhost:3000`.
2. Browse the list of hiking trails displayed on the main page.
3. Click the heart icon (or similar) to mark a trail as a favorite.
4. View your favorite hikes in the favorites section.

---


## Project Structure

```
elmo-hikes/
├── index.html
├── package.json
├── README.md
└── src/
    ├── assets/
    │   └── images/          # All image assets
    ├── components/
    │   ├── js/              # Web Components
    │   └── styles/          # Component styles
    ├── js/
    │   ├── app.js           # Main application logic
    │   ├── authentication.js # Firebase authentication
    │   ├── firebaseConfig.js # Firebase configuration
    │   ├── logInPage.js     # Login page logic
    │   └── main.js          # Main page logic
    ├── pages/
    │   ├── login.html       # Login page
    │   └── main.html        # Main application page
    └── styles/              # Global styles
        ├── Adams.css
        ├── index.css
        ├── main.css
        └── reset.css
```

---


## Contributors

- **Adam** - BCIT CST Student, Likes going on hikes.
- **Jiahao(Samon) Zhu** - BCIT CST Student with a passion for user-friendly and cool applications. Fun fact: Loves watching Neflix.
- **Markus** - BCIT CST Student, Likes cooking.
---


## Acknowledgments

- Trail data and images are for demonstration purposes only.
- Code snippets were adapted from resources such as [Stack Overflow](https://stackoverflow.com/) and [MDN Web Docs](https://developer.mozilla.org/).
- Icons sourced from [FontAwesome](https://fontawesome.com/) and images from [Unsplash](https://unsplash.com/).

---


## Limitations and Future Work
### Limitations

- Limited trail details (e.g., no live trail conditions).
- Accessibility features can be further improved.

### Future Work

- Implement map view and trailhead directions.
- Add filtering and sorting options (e.g., by difficulty, distance).
- Create a dark mode for better usability in low-light conditions.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
