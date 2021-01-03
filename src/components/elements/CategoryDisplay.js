import { useState } from "react";

import CompactTotalCategory from "../elements/CompactTotalCategory";
import CategoryCharts from "./CategoryCharts";
import CompactDisplayCategory from "../elements/CompactDisplayCategory";
import calcFunctions from "../../utilities/calcFunctions";


// Create function
function CategoryDisplay(props) {
  
  const [newInput, setNewInput] = useState({
    inputName: "",
    inputValue: "",
  });

  const inputs = Object.keys(props.inputs).map((key, idx) => {
    return <CompactDisplayCategory 
    deleteBudgetInput={props.deleteBudgetInput} 
    budgetKey={props.budgetKey} 
    key={idx} 
    inputName={key}
    inputValue={props.inputs[key]}
    />;
  })

  

  return (
    <div className="category-container">
      <CategoryCharts title={props.budget.title} color={props.budget.colorScheme} inputs={props.inputs}/>
      <CompactTotalCategory budgetKey={props.budgetKey} total={calcFunctions.calcCategoryTotal(props.inputs)} />

      <div className="new-input">
        <form noValidate>
          <label htmlFor="expenseType">Type</label>
          <input
            type="text"
            value={newInput.type}
            onChange={(e) => {
              setNewInput({
                inputName: e.target.value,
                inputValue: newInput.inputValue,
              });
            }}
          />
          <label htmlFor="expensePrice">Price</label>
          <input
            type="number"
            value={newInput.price}
            onChange={(e) => {
              setNewInput({
                inputName: newInput.inputName,
                inputValue: e.target.value,
              });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              props.addBudgetInput(props.budgetKey, newInput);
            }}
          >
            Add Entry
          </button>
        </form>
      </div>
      {inputs}
    </div>
  );
}

// Export function
export default CategoryDisplay;
