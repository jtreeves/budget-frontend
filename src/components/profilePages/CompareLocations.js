function CompareLocations(props) {
  console.log(props.budget);
  return (
    <div>
      <h3>Compare Locations</h3>
      <div>
        <h3>Location: {props.budget.location}</h3>
      </div>
    </div>
  );
}

// Export function
export default CompareLocations;