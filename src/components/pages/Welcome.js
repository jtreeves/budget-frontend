import Signup from './Signup'

// Create function
function Welcome(props) {
  return (
    <div className="div-public-page">
      <div className="div-public-header">
        <h1>Welcome</h1>
        <p>
          Are you ready to see the possibilities in your budget? Kaleidoscope is ready to show you.
          Big life decisions require big picture thinking. Kaleidoscope makes it easy to see how financial twists and turns
          can change your life. Create and compare multiple budgets. See how those budgets stack up in cities across the U.S. 
          See how beautiful your financial future can be. 
        </p>
      </div>
      <Signup handleLoginAfterSignup={props.handleLoginAfterSignup} />
    </div>
  )
}

// Export function
export default Welcome
