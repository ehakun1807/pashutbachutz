
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Target container 'root' not found");
}

try {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to render the app:", error);
  container.innerHTML = `<div style="padding: 20px; text-align: center; color: red;">
    <h2>שגיאה בטעינת האתר</h2>
    <p>אנא נסו לרענן את הדף</p>
  </div>`;
}
