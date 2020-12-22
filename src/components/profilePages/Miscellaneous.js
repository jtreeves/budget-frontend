import CategoryDisplay from '../elements/CategoryDisplay'

function Miscellaneous(props) {
  let inputs = [
    {"Rent": "934.23"},
    {"Insurance": "$55.34"},
    {"Upkeep": "$100.67"},
  ];

  return (
    <div>
      <h3>This is the Miscellaneous page!!!!</h3>
      <CategoryDisplay inputs={inputs} />
    </div>
  );
}

// Export function
export default Miscellaneous;