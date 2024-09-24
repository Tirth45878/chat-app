import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { SocketProvider } from './context/SocketContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <SocketProvider>
    <App />
    <Toaster closeButton />

    </SocketProvider>
  
)
