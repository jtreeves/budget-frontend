// Create function
function CompactDisplay(props) {
  

  const inputs = Object.keys(props.inputs).map((inputKey, idx) => {
    return <li key={idx}>{inputKey}: ${props.inputs[inputKey]}</li>
  })

  return (
    <div className="compact-container">
      <div id={props.compactContainerId} className="div-color-bar"></div>
      
      <div className="compact-container-text">
        <div>
          <h3>{props.title}</h3>
          <ul>{inputs}</ul>
        </div>

        <div>
          <p className="currency">${props.total}</p>
          <p className="timeframe">Per Month</p>
        </div>
      </div>
    </div>
  );
}

// Export function
export default CompactDisplay;



  // Treat as normal array (map or forEach)
  // budgetSeed.map - log all elements that result from this. 
  // Object.keys(element declared in callback)
  // Object.values(element declared in callback)
  // Pass down specific object to each category for display

  // Inside forEach function concat Objectkey and Objectvalue into a string which
  // gets pushed into an empty array within the function. 
  // needs to be done for each category