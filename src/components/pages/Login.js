// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useAlert } from 'react-alert'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Logo from '../elements/Logo'

// Import internal utility
import setAuthToken from '../../utilities/setAuthToken'

// Import internal component
import FormGroup from '../elements/FormGroup'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// Create function
function Login(props) {
    const alert = useAlert()

    // Set initial state values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Set email from form
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // Set password from form
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // Submit form data
    const handleSubmit = async (e) => {
        console.log('submitted login')
        try {
            e.preventDefault()
            const userData = {email, password}
            const currentUser = await axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
            // Create token from currentUser data
            const {token} = currentUser.data
            // Store token in localStorage
            localStorage.setItem('jwtToken', token)
            // Set token to auth header
            setAuthToken(token)
            // Decode token to get user data
            const decoded = jwt_decode(token)
            // Set current user with decoded data
            props.nowCurrentUser(decoded)
        } catch(error) {
            // Alert user of any errors logging in
            alert.show(error.response.data.msg)
            console.log(`LOGIN ERROR: ${error}`)
        }
    }

    // Redirect to profile page
    if (props.user) return <Redirect to="/profile" />

    return (
        <div className="row mt-4 col-md-7 offset-md-3 card card-body">
            <Logo />
            <h1 className="py-2">Log In</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="email"
                    label="email"
                    value={email}
                    display="Email"
                    onChange={handleEmail}
                />
                <FormGroup
                    type="password"
                    label="password"
                    value={password}
                    display="Password"
                    onChange={handlePassword}
                />
                <button
                    onClick={handleSubmit}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

// Export function
export default Login