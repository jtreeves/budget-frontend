// Import external dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter as Router } from 'react-router-dom'

// Import internal dependencies
import App from './App'
import reportWebVitals from './reportWebVitals'

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

ReactDOM.render(
    <Router>
        <AlertProvider template={AlertTemplate} {...options}>
        <App />
        </AlertProvider>
    </Router>,
    document.getElementById('root')
)

reportWebVitals()