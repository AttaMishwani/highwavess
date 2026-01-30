import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ThemeProvider } from './context/ThemeContext.jsx';

gsap.registerPlugin(ScrollTrigger);

// Initialize theme before render
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.add(savedTheme);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
