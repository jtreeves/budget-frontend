import Signup from './Signup';

// Create function
function Welcome(props) {
  return (
    <div className="div-public-page">
      <div className="div-public-header">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum excepturi,
          pariatur dolore fuga perferendis mollitia deserunt a voluptas assumenda! Consequatur
          beatae qui dolorem tempora possimus accusantium, fugit eius quidem?
        </p>
      </div>
      <Signup handleLoginAfterSignup={props.handleLoginAfterSignup} />
    </div>
  );
}

// Export function
export default Welcome;
