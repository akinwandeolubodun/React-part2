import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FancyInput from './RefExample.jsx'
import EffectExample from './EffectExample.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FancyInput/>
    <EffectExample/>
  </React.StrictMode>,
)
