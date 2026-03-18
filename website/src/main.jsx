import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n' // i18n must be imported before App
import './index.css'
import App from './app/App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
