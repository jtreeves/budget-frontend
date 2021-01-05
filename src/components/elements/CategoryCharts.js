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

    if (newData.length === 0) {
      return (
        <div>
          <h2>No data to display</h2>
          <h2>Enter data below</h2>
          <h1> &darr; </h1>
        </div>
      )
    } else {
      return (
        <div className="chart-container">
          <CategoryChart title={props.title} color={props.color} data={newData} budgetKey={props.budgetKey} />
        </div>
      )
    }
}

// Export function
export default CategoryCharts;