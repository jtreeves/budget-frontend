// Import external dependencies
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// Import internal component
import FormGroup from '../elements/FormGroup'

// Create shortcut for environmental variable
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// Create function
function Signup() {
    // Set initial state values
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    // Set name from form
    const handleName = (e) => {
        setName(e.target.value)
    }

    // Set email from form
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // Set password from form
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // Set confirm password from form
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    // Submit form data
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            // Check that passwords match
            if (password === confirmPassword) {
                // Check password length
                if (password.length >= 8) {
                    // Create new user if both checks pass  
                    const newUser = {name, email, password}
                    await axios.post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
                    setRedirect(true)
                } else {
                    // Alert user if password too short
                    alert('Password must be at least 8 characters long')
                }
            } else {
                // Alert user if passwords do not match
                alert('Passwords must match')
            }
        } catch(error) {
            // Alert user if email already in use
            alert(error.response.data.msg)
            console.log(`SIGNUP ERROR: ${error}`)
        }
    }

    // Redirect to login page
    if (redirect) return <Redirect to="/login" />

    return (
        <div className="row mt-4 col-md-7 offset-md-3 card card-body">
            <h1 className="py-2">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    type="text"
                    label="name"
                    value={name}
                    display="Name"
                    onChange={handleName}
                />
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
                <FormGroup
                    type="password"
                    label="confirmPassword"
                    value={confirmPassword}
                    display="Confirm Password"
                    onChange={handleConfirmPassword}
                />
                <button
                    type="submit"
                    className="btn btn-primary float-right"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

// Export function
export default Signup