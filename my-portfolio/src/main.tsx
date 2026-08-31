import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./styles/Pages/_root.scss"
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
     <Analytics />
  </StrictMode>,
)
