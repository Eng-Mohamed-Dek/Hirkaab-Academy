import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CourseContextProvider from './context/CourseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CourseContextProvider>
  </StrictMode>,
)
