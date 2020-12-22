// Import external dependency
import { render, screen } from '@testing-library/react'

// Import internal component
import Welcome from './components/pages/Welcome'
import About from './components/pages/About'
// import Signup from './components/pages/Signup'


// Test Welcome component
test('render the Welcome header', () => {
    render(<Welcome />)
    const h1Element = screen.getByText(/Welcome/i)
    expect(h1Element).toBeInTheDocument()
})

// Test About component
test('render the About page', () => {
    render(<About />)
    const h1Element = screen.getByText(/About/i)
    expect(h1Element).toBeInTheDocument()
})

// Test Signup component
// test('render the Signup page', () => {
//     render(<Signup />)
//     const h1Element = screen.getByText(/Signup/i)
//     expect(h1Element).toBeInTheDocument()
// })
