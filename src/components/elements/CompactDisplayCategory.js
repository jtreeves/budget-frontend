import calcFunctions from "../../utilities/calcFunctions";

// Create function
function CompactDisplayCategory(props) {
  console.log(props);
  
  return (
    <div className="compact-container">
      <div id={`cc-${props.budgetKey}`} className="div-color-bar"></div>

      <div className="compact-container-text">
        <div className="div-subcategory-name">
          <h3>{props.inputName}</h3>
          <button
            className="button-small"
            onClick={() => {
              props.deleteBudgetInput(props.budgetKey, props.inputName)
            }}
          >
            Delete
          </button>
        </div>

        <div>
          <p className="currency">{calcFunctions.formatCurrency(props.inputValue)}</p>
          <p className="timeframe">Per Month</p>
        </div>
      </div>
    </div>
  );
}

// Export function
export default CompactDisplayCategory;
