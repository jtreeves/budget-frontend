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

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addBudgetInput(props.budgetKey, newInput);
    setNewInput({
      inputName: "",
      inputValue: ""
    })
  }

  return (
    <div className="category-container">
      <CategoryCharts title={props.budget.title} color={props.budget.colorScheme} inputs={props.inputs} budgetKey={props.budgetKey} />

      <CompactTotalCategory budgetKey={props.budgetKey} total={calcFunctions.calcCategoryTotal(props.inputs)} colorScheme={props.budget.colorScheme} />

      <form noValidate>
          <input
            type="text"
            value={newInput.inputName}
            onChange={(e) => {
              setNewInput({
                inputName: e.target.value,
                inputValue: newInput.inputValue,
              });
            }}
            placeholder="Expense Name (e.g. Rent)"
          />

          <input
            type="number"
            value={newInput.inputValue}
            onChange={(e) => {
              setNewInput({
                inputName: newInput.inputName,
                inputValue: e.target.value,
              });
            }}
            placeholder="Amount"
          />

        <button
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </form>
      {inputs}
    </div>
  );
}

// Export function
export default CategoryDisplay;
