import CompactTotal from '../elements/CompactTotal'
import GraphContainer from '../elements/GraphContainer'
import CompactDisplayCategory from '../elements/CompactDisplayCategory'

// Create function
function CategoryDisplay(props) {

  const inputs = props.inputs.map((ele, idx) => {
    return <CompactDisplayCategory key={idx} input={ele} />
  })
  
  return (
    <div className="category-container">
      <GraphContainer />
      <CompactTotal total={"$1090.24"}/>
      {inputs}
    </div>
  );
}

// Export function
export default CategoryDisplay;