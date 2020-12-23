import CategoryDisplay from '../elements/CategoryDisplay'

function Housing(props) {

  return (
    <div>
      <h3>This is the Housing page!!!!</h3>
      <CategoryDisplay inputs={props.inputs} />
    </div>
  );
}

// Export function
export default Housing;