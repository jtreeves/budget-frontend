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
        <div className="div-no-data">
          <p>Let's get started!</p>
          <p>Add an expense below.</p>
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