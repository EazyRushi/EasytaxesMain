# Firebase Deployment Guide for Eazytaxes

This project is configured for deployment to **Firebase Hosting**.

## Prerequisites

1.  **Firebase Project**: Create a project in the [Firebase Console](https://console.firebase.google.com/).
2.  **Firebase CLI**: You can use the locally installed tools via `pnpm exec firebase`.

## Configuration Files

- `firebase.json`: Defines hosting settings, rewrites for SPA routing, and caching headers for performance.
- `.firebaserc`: Associates the project with a specific Firebase project ID.

## Deployment Steps

1.  **Login to Firebase** (one-time):
    ```bash
    pnpm exec firebase login
    ```

2.  **Initialize Project** (if you want to change the project ID):
    ```bash
    pnpm exec firebase use --add
    ```
    *Select your project from the list.*

3.  **Build and Deploy**:
    ```bash
    pnpm run deploy:firebase
    ```
    *This will first build the client using `pnpm build` and then upload the contents of `dist/public` to Firebase Hosting.*

## Important Notes

- **API/Backend**: This configuration is for **Firebase Hosting (Static)**. Since this project includes an Express backend with PostgreSQL, you will need to host the backend separately (e.g., on Firebase Cloud Run or App Hosting) if you want the API features (like job applications) to work.
- **Environment Variables**: Ensure your `EMAIL_USER` and `EMAIL_APP_PASSWORD` are set in your production environment if you deploy the backend.
- **Client-Side Routing**: The `firebase.json` is configured with a rewrite rule to support `wouter` client-side navigation.
