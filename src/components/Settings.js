// Import necessary modules from React and other libraries
import React from 'react';
import { useSettings } from './settinContext/SettingsContext'; // Import the useSettings hook for settings context

// Define the Settings component
const Settings = () => {
  const { settings, setSettings } = useSettings(); // Get settings and setSettings function from the settings context

  // Function to handle theme change
  const handleThemeChange = (event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: event.target.value,
    }));
  };

  // Function to handle font change
  const handleFontChange = (event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      font: event.target.value,
    }));
  };

  // Render the component UI
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6`}>
      <h1 className="text-4xl font-bold mb-8">Settings</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <div>
          <label className="block text-gray-700">Theme:</label>
          <select value={settings.theme} onChange={handleThemeChange} className="mt-1 block w-full">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="ocean">Ocean</option>
            <option value="sunset">Sunset</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Font:</label>
          <select value={settings.font} onChange={handleFontChange} className="mt-1 block w-full">
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Export the Settings component as the default export
export default Settings;
