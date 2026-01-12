import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ADD basename here to match your vite config */}
    <BrowserRouter basename="/popx-assignment-react">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)