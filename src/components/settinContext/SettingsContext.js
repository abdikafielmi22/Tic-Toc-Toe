// Importing necessary functions and hooks from the React library
import React, { createContext, useContext, useState } from 'react';

// Creating a context for the settings
const SettingsContext = createContext();

// Custom hook to use the settings context
export const useSettings = () => {
  // useContext hook allows us to access the context value
  return useContext(SettingsContext);
};

// Provider component to wrap the application and provide settings
export const SettingsProvider = ({ children }) => {
  // useState hook to manage the settings state with default values
  const [settings, setSettings] = useState({
    theme: 'light', // Default theme is set to 'light'
    font: 'Arial'   // Default font is set to 'Arial'
  });

  return (
    // Providing the settings and setSettings function to the context
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children} {/* Rendering child components */}
    </SettingsContext.Provider>
  );
};
