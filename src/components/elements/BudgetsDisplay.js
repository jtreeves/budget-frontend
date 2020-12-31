import { useState } from "react";
import NewBudgetForm from "../../utilities/NewBudgetForm";
import axios from "axios";

function BudgetsDisplay(props) {
  const [formDisplayed, setFormDisplayed] = useState(false);
  const [budgetName, setBudgetName] = useState("");
  const [colorScheme, setColorScheme] = useState("red");
  const backendUrl = process.env.REACT_APP_SERVER_URL;
  const emptyCategories = {
    housing: {},
    utility: {},
    food: {},
    transportation: {},
    entertainment: {},
    misc: {},
    income: {},
  }

  const handleSubmit = async () => {
    console.log(budgetName);
    console.log(colorScheme);
    let apiRes = await axios.post(backendUrl + "/budgets/" + props.user.id, {
      title: budgetName,
      colorScheme: colorScheme,
      categories: emptyCategories
    });
    console.log(apiRes);
    setFormDisplayed(false);
  };

  const budgetForm = () => {
    if (formDisplayed) {
      return (
        <NewBudgetForm
          setName={setBudgetName}
          setColor={setColorScheme}
          budgetName={budgetName}
          colorScheme={colorScheme}
        />
      );
    } else {
      return;
    }
  };

  const budgetButtons = () => {
    if (formDisplayed) {
      return <button onClick={() => handleSubmit()}>Submit</button>;
    } else {
      return <button onClick={() => setFormDisplayed(true)}>New Budget</button>;
    }
  };

  const budgets = props.budgetArray.map((budget, idx) => {
    return <li key={idx}>{budget.title}</li>;
  });

  return (
    <div>
      <p>Budgets</p>
      <ul>
        {budgets}
        {budgetForm()}
      </ul>
      {budgetButtons()}
    </div>
  );
}

export default BudgetsDisplay;
