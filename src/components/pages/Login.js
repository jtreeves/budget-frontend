// Import internal component
import FormGroup from '../elements/FormGroup'

// Create function
function Login(props) {
  return (
    <div id="div-login">
      <form onSubmit={props.handleLogin}>
        <FormGroup
          type="email"
          label="email"
          value={props.loginEmail}
          display="Email"
          onChange={props.handleLoginEmail}
        />
        <FormGroup
          type="password"
          label="password"
          value={props.loginPassword}
          display="Password"
          onChange={props.handleLoginPassword}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            props.handleLogin()
          }}
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