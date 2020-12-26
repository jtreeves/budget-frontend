import { useState } from "react";
import CategoryDisplay from "../elements/CategoryDisplay";

function Housing(props) {

  const [inputFormDisplayed, setInputFormDisplayed] = useState(false);
  const [newInput, setNewInput] = useState({
    type: "",
    price: 0,
  });

  if (inputFormDisplayed) {
    return (
      <div>
        <h3>This is the Housing page!!!!</h3>
        <CategoryDisplay inputs={props.inputs} />
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
            type="float"
            value={newInput.price}
            onChange={(e) => {
              setNewInput({
                type: newInput.type,
                price: e.target.value,
              });
            }}
          />
        </form>
        <button onClick={() => props.updateBudget("housing", newInput)}>Submit Expense</button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>This is the Housing page!!!!</h3>
        <CategoryDisplay inputs={props.inputs} />
        <button onClick={() => setInputFormDisplayed(true)}>Add Expense</button>
      </div>
    );
  }
}

// Export function
export default Housing;
