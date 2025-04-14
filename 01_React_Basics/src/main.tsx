import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contact from './Contact.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Contact/>
  </StrictMode>,
)
