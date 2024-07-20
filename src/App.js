// Import necessary modules and components from React and other libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes for navigation
import { AuthProvider } from './components/AuthProvider'; // Import AuthProvider component for authentication context
import Login from './components/Login'; // Import Login component
import Home from './components/Home'; // Import Home component
import Game from './components/Game'; // Import Game component
import Settings from './components/Settings'; // Import Settings component
import { SettingsProvider } from './components/settinContext/SettingsContext'; // Import SettingsProvider for settings context
import About from './components/About'; // Import About component

// Define the main App component
function App() {
  return (
    // Wrap the application with AuthProvider for authentication context
    <AuthProvider>
      // Wrap the application with SettingsProvider for settings context
      <SettingsProvider>
        // Define the Router for navigation
        <Router>
          // Define the Routes for different paths
          <Routes>
            <Route path="/login" element={<Login />} /> // Route for Login component
            <Route path="/home" element={<Home />} /> // Route for Home component
            <Route path="/game" element={<Game />} /> // Route for Game component
            <Route path="/settings" element={<Settings />} /> // Route for Settings component
            <Route path="/about" element={<About />} /> // Route for About component
            <Route path="/" element={<Home />} /> // Default route for Home component
          </Routes>
        </Router>
      </SettingsProvider>
    </AuthProvider>
  );
}

// Export the App component as the default export
export default App;
