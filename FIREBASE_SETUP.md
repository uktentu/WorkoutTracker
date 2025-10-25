# Firebase Configuration Template

## Important Security Notice
**NEVER commit your actual Firebase credentials to version control!**

## Setup Instructions

1. **Get Your Firebase Configuration**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project or create a new one
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the web app icon or create a new web app
   - Copy your Firebase configuration object

2. **Update index.html**
   - Open `index.html` in your editor
   - Find the `firebaseConfig` object (around line 139)
   - Replace the values with your own Firebase configuration
   - **DO NOT commit these changes to a public repository**

3. **Firebase Configuration Format**
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

4. **Enable Firebase Services**
   - **Authentication**: Enable Email/Password sign-in method
   - **Firestore Database**: Create a database in production mode
   - **Security Rules**: Apply the rules from README.md

## Production Deployment

For production deployments, consider:

1. **Environment Variables**: Use a build system (Vite, Webpack, etc.) to inject configuration from environment variables
2. **Firebase Hosting**: Use Firebase's built-in hosting with automatic configuration
3. **Domain Restrictions**: Restrict API keys to specific domains in Firebase Console
4. **Security Rules**: Implement proper Firestore security rules

## Security Best Practices

- ✅ Use environment-specific configuration files
- ✅ Add sensitive files to `.gitignore`
- ✅ Regularly rotate API keys
- ✅ Implement proper Firebase security rules
- ✅ Use domain restrictions for API keys
- ❌ Never commit API keys to public repositories
- ❌ Never share configuration in screenshots or documentation
- ❌ Never use the same keys for development and production

## Troubleshooting

If you see "Firebase Initialization Error":
1. Check that all configuration values are correct
2. Verify your Firebase project exists
3. Ensure Authentication and Firestore are enabled
4. Check browser console for specific error messages
5. Verify your domain is authorized in Firebase Console
