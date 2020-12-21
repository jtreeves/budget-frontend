// Import external dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Import internal dependencies
import App from './App'
import reportWebVitals from './reportWebVitals'

// Import internal CSS
import './index.css'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()