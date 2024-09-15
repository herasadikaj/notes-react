# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



React Notes App
The React Notes App is a simple, user-friendly note-taking application with a secure login and registration system. The app is designed to help users manage their notes efficiently while ensuring data security.

Features:
Login & Registration: Users can create an account by registering with their credentials. The password is securely encrypted before storage. Once registered, users can log in using the stored credentials.

Local Storage Integration: User information, including login credentials and notes, is stored in the browser's local storage. This allows users to retain their data even after refreshing or closing the app.

Notes Management: After logging in, users are directed to a page where they can view, add, delete, and edit their notes. Each note is saved in local storage, ensuring persistence across sessions. Deleting a note will also remove it from local storage.

Secure Logout: Upon logging out, all user data, including login credentials and notes, are cleared from local storage to protect privacy and security.

Encryption: The app uses password encryption during the registration process to secure user credentials, ensuring that sensitive information is protected.

This app is built with React and leverages local storage for state management, making it a lightweight solution for managing personal notes securely.
