// Import external dependencies
import { useState } from "react";
import { useAlert } from "react-alert";
import axios from 'axios'
import Cities from "../../utilities/Cities";

// Create function
function Dashboard(props) {
  const alert = useAlert();
  const [budgetTitle, setBudgetTitle] = useState("");
  const [colorScheme, setColorScheme] = useState("Red");
  const [location, setLocation] = useState("Albany, NY");
  const [income, setIncome] = useState("")
  const backendUrl = process.env.REACT_APP_SERVER_URL;
  const emptyCategories = {
    housing: {},
    utility: {},
    food: {},
    transportation: {},
    entertainment: {},
    misc: {}
  }

  console.log(`BACKEND URL: ${backendUrl}`)

  const handleSubmit = async (e) => {
    console.log('IN HANDLE SUBMIT FUNCTION')
    e.preventDefault()
    if (budgetTitle === "") {
      alert.show("Budget must have a name")
      return
    }
    let apiRes = await axios.post(backendUrl + "/budgets/" + props.user.id, {
      title: budgetTitle,
      location: location,
      income: income,
      colorScheme: colorScheme,
      categories: emptyCategories
    });

    let apiRes2 = await axios.put(backendUrl + "/users/" + props.user.id, {
      firstTimeUser: false
    });

    props.reFetchUser()

  }

  return (
    <div className="div-first-budget-page">
      <div className="div-first-budget">
        <h1>Create your first budget</h1>
        
        <div className="div-instructions">
          <div><p>What do you call a budget without a name? Budget. Get creative!</p></div>
          <div><p>How much moolah do you earn in a year (after taxes, of course)?</p></div>
          <div><p>Give your money some context. Pick a city to see how comfy you can live.</p></div>
          <div><p>Make budget identification easy on your eyes and select a color.</p></div>
        </div>

        <form>
          <label htmlFor="first-budget-title">Name</label>
          <input
            placeholder="My First Budget"
            id="first-budget-title"
            name="title"
            type="text"
            value={budgetTitle}
            onChange={(e) => setBudgetTitle(e.target.value)}
            />

          <label htmlFor="first-budget-income">Income</label>
          <input
            placeholder="50000"
            id="first-budget-income"
            name="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />

          <Cities location={location} setLocation={setLocation}/>

          <div>
            <label htmlFor="first-budget-color">Color</label>
            <select
              name="colorScheme"
              id="first-budget-color"
              onChange={(e) => setColorScheme(e.target.value)}
            >
              <option value="Magenta">Magenta</option>
              <option value="Red">Red</option>
              <option value="Orange">Orange</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Purple">Purple</option>
            </select>
          </div>

          <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

// Export function
export default Dashboard;
