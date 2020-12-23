import CategoryDisplay from '../elements/CategoryDisplay'

function Miscellaneous(props) {

  return (
    <div>
      <h3>This is the Miscellaneous page!!!!</h3>
      <CategoryDisplay inputs={props.inputs} />
    </div>
  );
}

// Export function
export default Miscellaneous;