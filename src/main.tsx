import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Pages other than the homepage are loaded on demand. If a visitor still has
// the site open from before a deploy, the old page file no longer exists, so
// reload once to pick up the new version instead of showing a blank page.
window.addEventListener('vite:preloadError', (event) => {
  const key = 'chunk-reload-at'
  const last = Number(sessionStorage.getItem(key) || 0)
  if (Date.now() - last > 10000) {
    sessionStorage.setItem(key, String(Date.now()))
    event.preventDefault()
    window.location.reload()
  }
})

createRoot(document.getElementById("root")!).render(<App />);
