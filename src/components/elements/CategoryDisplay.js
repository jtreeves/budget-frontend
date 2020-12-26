import CompactTotal from '../elements/CompactTotal'
import GraphContainer from '../elements/GraphContainer'
import CompactDisplayCategory from '../elements/CompactDisplayCategory'
import calcTotal from '../../utilities/calcTotal'

// Create function
function CategoryDisplay(props) {

  const inputs = props.inputs.map((ele, idx) => {
    return <CompactDisplayCategory key={idx} input={ele} />
  })

  return (
    <div className="category-container">
      <GraphContainer /> 
      <CompactTotal total={calcTotal(props)}/>
      {inputs}
    </div>
  );
}

// Export function
export default CategoryDisplay;