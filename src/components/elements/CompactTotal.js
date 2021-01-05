import calcFunctions from "../../utilities/calcFunctions";

const provideColorCode = (colorName, opacity) => {
  switch (colorName) {
    case 'Magenta':
      return `rgba(159, 46, 113, ${opacity})`;
    case 'Red':
      return `rgba(158, 31, 20, ${opacity})`;
    case 'Orange':
      return `rgba(234, 135, 50, ${opacity})`;
    case 'Green':
      return `rgba(70, 117, 49, ${opacity})`;
    case 'Blue':
      return `rgba(43, 106, 140, ${opacity})`;
    case 'Purple':
      return `rgba(88, 41, 92, ${opacity})`;
  }
}

function CompactTotal(props) {
  return (
    <div className="compact-container-total" style={{ backgroundColor: provideColorCode(props.colorScheme, '0.3') }}>
      <h3>Total Expenses</h3>
      <p className="currency">{calcFunctions.formatCurrency(props.totalExpense)}</p>
    </div>
  );
}

// Export function
export default CompactTotal;
