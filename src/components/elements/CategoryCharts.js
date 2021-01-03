import CategoryChart from "./CategoryChart"

function CategoryCharts(props) {

  

  const newData = []
  Object.keys(props.inputs).forEach((key) => {
    let chartInput = {
      name: key,
    }
    chartInput[props.title] = props.inputs[key]
    newData.push(chartInput)
  })

  return (
    <div className="chart-container">
      <CategoryChart title={props.title} color={props.color} data={newData}/>
    </div>
  );
}

// Export function
export default CategoryCharts;