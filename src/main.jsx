import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx' // เปลี่ยนจาก home มาเป็น App (ตัวใหญ่ตามมาตรฐาน React)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)