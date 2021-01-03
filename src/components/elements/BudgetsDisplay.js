import { useEffect, useState } from "react";
import NewBudgetForm from "../../utilities/NewBudgetForm";
import axios from "axios";

function BudgetsDisplay(props) {
  const [formDisplayed, setFormDisplayed] = useState(false);
  const [budgetName, setBudgetName] = useState("");
  const [colorScheme, setColorScheme] = useState("Red");
  const [copyDataFrom, setCopyDataFrom] = useState("None")
  const [copyDataChoices, setCopyDataChoices] = useState([])
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
  
  function copyDataFilter() {
    let returnObj;
    if (copyDataFrom === "None") {
      returnObj = emptyCategories
    } else {
      props.budgetArray.forEach((budget) => {
        if (budget._id === copyDataFrom) {
          returnObj = budget.categories
        }
      })
    }
    return returnObj
  }

  useEffect(() => {
    const arrayCopy = []
    props.budgetArray.forEach((budget) => {
      let abbrevBudget = {
        title: budget.title,
        _id: budget._id
      }
      arrayCopy.push(abbrevBudget)
    })
    setCopyDataChoices(arrayCopy)
  }, [props.budgetArray])

  const handleSubmit = async () => {
    let inputs = copyDataFilter()
    let apiRes = await axios.post(backendUrl + "/budgets/" + props.user.id, {
      title: budgetName,
      colorScheme: colorScheme,
      categories: inputs
    });
    setFormDisplayed(false);
    props.loadNewBudget();
  };

  const budgetForm = () => {
    if (formDisplayed) {
      return (
        <NewBudgetForm
          setCopyDataFrom={setCopyDataFrom}
          copyDataChoices={copyDataChoices}
          setName={setBudgetName}
          setColor={setColorScheme}
          budgetName={budgetName}
          colorScheme={colorScheme}
          setFormDisplayed={setFormDisplayed}
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
    return <div>
      <li key={idx}><a className="budget-links" onClick={() => props.switchBudgets(budget)}>{budget.title}</a></li>
    </div>;
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
