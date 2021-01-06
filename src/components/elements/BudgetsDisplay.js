import { useEffect, useState } from "react";
import NewBudgetForm from "../../utilities/NewBudgetForm";
import axios from "axios";

const provideColorCode = (colorName) => {
  switch (colorName) {
    case 'Magenta':
      return '#9f2e71';
    case 'Red':
      return '#aa0100';
    case 'Orange':
      return '#f68200';
    case 'Green':
      return '#367724';
    case 'Blue':
      return '#116b90';
    case 'Purple':
      return '#5e235f';
  }
}

function BudgetsDisplay(props) {
  const [formDisplayed, setFormDisplayed] = useState(false);
  const [budgetName, setBudgetName] = useState("");
  const [colorScheme, setColorScheme] = useState(props.colorsAvailable[0]);
  const [copyDataFrom, setCopyDataFrom] = useState("None")
  const [location, setLocation] = useState("Albany, NY");
  const [income, setIncome] = useState("")
  const [copyDataChoices, setCopyDataChoices] = useState([])
  const backendUrl = process.env.REACT_APP_SERVER_URL;
  const emptyCategories = {
    housing: {},
    utility: {},
    food: {},
    transportation: {},
    entertainment: {},
    misc: {}
  }
  
  async function copyDataFilter() {
    let returnObj;
    let getId;
    if (copyDataFrom === "None") {
      returnObj = emptyCategories
    } else {
      props.budgetArray.forEach((budget) => {
        if (budget._id === copyDataFrom) {
          getId = budget._id
        }
      })
      let apiRes = await axios.get(backendUrl + "/budgets/" + getId);
      returnObj = apiRes.data.budget.categories
    }
    return returnObj
  }

  const resetFormInputs = () => {
    setBudgetName("")
    setColorScheme(props.colorsAvailable[0])
    setCopyDataFrom("None")
    setLocation("Albany, NY")
    setIncome("")
  }

  const newButtonClicked = () => {
    resetFormInputs()
    setFormDisplayed(true)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    let inputs = await copyDataFilter()
    let apiRes = await axios.post(backendUrl + "/budgets/" + props.user.id, {
      title: budgetName,
      colorScheme: colorScheme,
      categories: inputs,
      location: location,
      income: income
    });
    setFormDisplayed(false);
    resetFormInputs()
    props.loadNewBudget();
  };

  const budgetForm = () => {
    if (formDisplayed) {
      // props.reFetchBudgets()
      return (
        <NewBudgetForm
          colorsAvailable={props.colorsAvailable}
          setLocation={setLocation}
          setIncome={setIncome}
          setCopyDataFrom={setCopyDataFrom}
          copyDataChoices={copyDataChoices}
          setName={setBudgetName}
          setColor={setColorScheme}
          budgetName={budgetName}
          colorScheme={colorScheme}
          setFormDisplayed={setFormDisplayed}
          handleSubmit={handleSubmit}
          budgetArray={props.budgetArray}
        />
      );
    } else {
      return;
    }
  };

  const newBudgetButton = () => {
    if (props.budgetArray.length >= 6) {
      return
    }
    if (!formDisplayed) {
      return <button className="button-small subsection-buttons" onClick={() => newButtonClicked()}>New</button>;
    } 
  };

  const budgets = props.budgetArray.map((budget, idx) => {
    return (
      <li key={idx}>
        <div className="icon-budget-color" style={{ backgroundColor: provideColorCode(budget.colorScheme) }}></div>
        <a className="budget-links" onClick={() => props.switchBudgets(budget)}>
          {budget.title}
        </a>
      </li>
    );
  });

  return (
    <div className="div-budgets">
      <h3>Budgets</h3>
      <ul>
        {budgets}
      </ul>
      {budgetForm()}
      {newBudgetButton()}
    </div>
  );
}

export default BudgetsDisplay;
