// Create function
function CompactDisplay(props) {
  const inputs = props.inputs.map((ele, idx) => {
    return <li key={idx}>{ele}</li>;
  });
// console.log(props.income)
// console.log(props.housing)
console.log(props.foodAndDrinks)

  return (
    <div className="compact-container">
      <div>
        <h3>{props.title}</h3>
        <ul>{inputs}</ul>
      </div>

      <div>
        <h3 className="currency">{props.total}</h3>
        <h3 className="timeframe">Per Month</h3>
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