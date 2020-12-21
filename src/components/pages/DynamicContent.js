
import DefaultProfile from '../elements/DefaultProfile'
import ExpandedDisplay from '../elements/ExpandedDisplay'

function DynamicContent(props) {
  if (!props.extension) {
    return (
      <div>
        <DefaultProfile />
      </div>
    );
  } else {
    return (
      <div>
        <ExpandedDisplay category={props.extension}/>
      </div>
    )
  }
}

// Export function
export default DynamicContent;