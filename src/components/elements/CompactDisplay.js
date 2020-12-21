// Create function
function CompactDisplay(props) {


  const inputs = props.inputs.map((ele, idx) => {
    return <li key={idx}>{ele}</li>
  })


  return (
    <div className="compact-container">
      <div>
        <h3>{props.title}</h3>
        <ul>
          {inputs}
        </ul>
      </div>

      <div>
        <h3>{props.total}</h3>
        <h3>Per Month</h3>
      </div>
    </div>
  );
}

// Export function
export default CompactDisplay;
