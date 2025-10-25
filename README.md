# Workout Progress Tracker

A sleek, modern web application for tracking your workout progress with a beautiful calendar interface. Built with vanilla JavaScript and Firebase for real-time data synchronization.

## 🌟 Features

- **Calendar-based tracking**: Visual monthly calendar to track your workout progress
- **Multiple status types**: Mark days as completed workout, rest day, or missed
- **Detailed workout logs**: Record bodyweight and workout notes for completed sessions
- **Real-time sync**: Data synchronized across devices using Firebase Firestore
- **User authentication**: Secure email/password authentication with Firebase Auth
- **Responsive design**: Works seamlessly on desktop and mobile devices
- **Dark theme**: Easy on the eyes with a modern dark UI using Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A Firebase account (free tier is sufficient)

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable **Authentication** with Email/Password sign-in method
4. Create a **Firestore Database** in production mode
5. Add security rules to your Firestore (see Security Rules section below)
6. Get your Firebase configuration from Project Settings > General > Your apps

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/uktentu/WorkoutTracker.git
   cd WorkoutTracker
   ```

2. **Important**: Update the Firebase configuration in `index.html`:
   - Open `index.html`
   - Locate the `firebaseConfig` object (around line 124)
   - Replace with your own Firebase configuration values
   - **Never commit API keys to public repositories**

3. Open `index.html` in your web browser or serve it using a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

4. Navigate to `http://localhost:8000` in your browser

### Firebase Security Rules

Add these security rules to your Firestore Database:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 📖 Usage

### Creating an Account
1. Click "Sign up" on the login page
2. Enter your email and password (minimum 6 characters)
3. Click "Create Account"

### Logging Workouts
1. Click on any day in the calendar
2. Select "Completed Workout" to log details
3. Enter your bodyweight (optional)
4. Add workout notes (exercises, sets, reps, weight, etc.)
5. Click "Save"

### Other Status Options
- **Rest Day**: Mark planned rest days
- **Missed Workout**: Track missed sessions
- **Clear Status**: Remove any marking from a day

### Navigation
- Use arrow buttons to navigate between months
- Click "Go to Today" to return to the current month
- Days with the current date are highlighted with a blue ring
- Days with logged details show a small blue dot indicator

## 🎨 Color Legend

- 🟢 **Green**: Completed workout
- 🟡 **Yellow**: Rest day
- 🔴 **Red**: Missed workout
- ⚫ **Gray**: No status set

## 🔒 Security Considerations

- **Never commit Firebase API keys to public repositories**
- Use environment variables or a configuration file not tracked by Git
- Review and properly configure Firebase security rules
- Consider implementing rate limiting for authentication attempts
- Regularly rotate API keys and update access permissions

## 🛠️ Technical Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Backend**: Firebase (Authentication + Firestore)
- **Fonts**: Google Fonts (Inter)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Known Issues

- Firebase configuration is currently hardcoded in the HTML file
- Limited data export functionality

## 🔮 Future Enhancements

- Data export/import functionality
- Workout statistics and analytics
- Exercise library
- Progress charts and graphs
- Goal setting features
- Streak tracking
- Social sharing capabilities

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Note**: Remember to secure your Firebase configuration and never share your API keys publicly!