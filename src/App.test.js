// Import external dependency
import { render, screen } from '@testing-library/react'

// Import internal component
import Welcome from './components/pages/Welcome'

// Test Welcome component
test('render the Welcome header', () => {
    render(<Welcome />)
    const h1Element = screen.getByText(/Welcome/i)
    expect(h1Element).toBeInTheDocument()
})