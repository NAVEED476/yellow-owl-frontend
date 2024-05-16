import React from 'react'
import ReactDOM from 'react-dom'; // Assuming you want to import the ReactDOM module
import App from "./App"
import './index.css'

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
