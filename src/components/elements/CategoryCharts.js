import CategoryChart from "./CategoryChart"

function CategoryCharts(props) {

  // console.log(props.inputs);

  const newData = []

  Object.keys(props.inputs).forEach((key) => {

    let chartInput = Object.create( { name: ""})
    chartInput.name = key
    chartInput[key] = props.inputs[key]
    newData.push(chartInput)
  })


  const data = [
    {
      name: 'Page A', pv: 2400
    },
    {
      name: 'Page B', pv: 1398,
    },
    {
      name: 'Page C', pv: 9800,
    },
    {
      name: 'Page D', pv: 3908,
    },
    {
      name: 'Page E', pv: 4800,
    },
    {
      name: 'Page F', pv: 3800,
    },
    {
      name: 'Page G', pv: 4300,
    },
  ];

  return (
    <div className="chart-container">
      <CategoryChart data={newData}/>
    </div>
  );
}

// Export function
export default CategoryCharts;