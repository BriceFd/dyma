import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
// const ReactElement = React.createElement('h1', { className: 'my-class'}, 'Hello world');

const h1 = <h1 className='salut'>Hello world !</h1>

// const tree = React.createElement('div', { className: 'my-div'}, ReactElement);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {h1}

    
    {/* <App /> */}
  </React.StrictMode>,
)
