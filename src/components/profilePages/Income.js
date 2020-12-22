import CategoryDisplay from '../elements/CategoryDisplay'

function Income(props) {

  let incomeInputs = [
    {"Trustfund": "934.23"},
    {"Loterry Winnings": "$55.34"},
    {"Stimulus Check": "$100.67"},
  ];

  return (
    <div>
      <h3>This is the Income page!!!!</h3>
      <CategoryDisplay inputs={incomeInputs} />
    </div>
  );
}

// Export function
export default Income;