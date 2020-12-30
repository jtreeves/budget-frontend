import CategoryChart from "./CategoryChart"

function CategoryCharts(props) {
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
      <CategoryChart data={data}/>
    </div>
  );
}

// Export function
export default CategoryCharts;