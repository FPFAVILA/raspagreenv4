import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { initFacebookPixel, trackPageView } from './utils/tracking';

const FACEBOOK_PIXEL_ID = '1309804263550614';

const AppWithTracking = () => {
  useEffect(() => {
    initFacebookPixel(FACEBOOK_PIXEL_ID);

    const timer = setTimeout(() => {
      trackPageView();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppWithTracking />
    </BrowserRouter>
  </StrictMode>
);
