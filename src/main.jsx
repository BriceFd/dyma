import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './Hello.jsx'
import './index.css'

  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Hello>
      <button>submit</button>
    </Hello>
    {/* <App /> */}
  </React.StrictMode>,
)
