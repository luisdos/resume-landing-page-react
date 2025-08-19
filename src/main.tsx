import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { LanguageProvider } from '@/context/LanguageProvider'
import { ThemeProvider } from '@/context/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
