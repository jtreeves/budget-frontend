import CategoryChart from "./CategoryChart"

function CategoryCharts(props) {
  let domainMax = 0;
  const newData = []
  Object.keys(props.inputs).forEach((key) => {
    let chartInput;
    if (key.length > 8) {
      let newKey = key.slice(0, 6) + "..."
      chartInput = {
        name: newKey,
      }
    } else {
      chartInput = {
        name: key,
      }
    }
    if (parseFloat(props.inputs[key]) > domainMax) {
      domainMax = Math.ceil(parseFloat(props.inputs[key]))
    }
    chartInput[props.title] = props.inputs[key]
    newData.push(chartInput)
  })

  const roundDomain = () => {
    domainMax = (domainMax - (domainMax % 10)) + 50
    return domainMax
  }
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
          <CategoryChart domainMax={roundDomain()} title={props.title} color={props.color} data={newData} budgetKey={props.budgetKey} />
        </div>
      )
    }
}

// Export function
export default CategoryCharts;