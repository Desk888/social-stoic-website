import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import TagManager from 'react-gtm-module';
import './index.css';

const tagManagerArgs = {
    gtmId: "GTM-KBKD294B",
  };
  
  TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")!).render(<App />);
