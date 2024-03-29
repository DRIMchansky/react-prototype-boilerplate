import React from 'react'
import ReactDOM from 'react-dom/client'

import { Hello } from './components/hello'
import './app/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
)
