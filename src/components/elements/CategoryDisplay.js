import { useState } from "react";

import CompactTotal from "../elements/CompactTotal";
import GraphContainer from "../elements/GraphContainer";
import CompactDisplayCategory from "../elements/CompactDisplayCategory";
import calcTotal from "../../utilities/calcTotal";

// Create function
function CategoryDisplay(props) {
  
  const [newInput, setNewInput] = useState({
    type: "",
    price: "",
  });

  const inputsObj = { inputs: [...props.inputs] };

  const inputs = props.inputs.map((ele, idx) => {
    return <CompactDisplayCategory deleteBudgetInput={props.deleteBudgetInput} index={idx} budgetKey={props.budgetKey} key={idx} input={ele} />;
  });

  return (
    <div className="category-container">
      <GraphContainer />
      <CompactTotal total={calcTotal(inputsObj)} />

      <div className="new-input">
        <form>
          <label htmlFor="expenseType">Type</label>
          <input
            type="text"
            value={newInput.type}
            onChange={(e) => {
              setNewInput({
                type: e.target.value,
                price: newInput.price,
              });
            }}
          />
          <label htmlFor="expensePrice">Price</label>
          <input
            type="text"
            value={newInput.price}
            onChange={(e) => {
              setNewInput({
                type: newInput.type,
                price: e.target.value,
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
