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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (budgetTitle === "") {
      alert.show("Budget must have a name")
      return
    }
    let apiRes = await axios.post(backendUrl + "/budgets/" + props.user.id, {
      title: budgetTitle,
      location: location,
      colorScheme: colorScheme,
      categories: emptyCategories
    });

    let apiRes2 = await axios.put(backendUrl + "/users/" + props.user.id, {
      firstTimeUser: false
    });

    window.location.reload(false)

  }

  return (
    <div className="div-public-page">
      <div className="div-public-header-02"></div>
      <h1 className="py-2">Create First Budget</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          placeholder="Budget Name"
          id="title"
          name="title"
          type="text"
          value={budgetTitle}
          onChange={(e) => setBudgetTitle(e.target.value)}
        />
        <Cities setLocation={setLocation}/>

        <div>
          <label htmlFor="colorScheme">Color Scheme:</label>
          <select
            name="colorScheme"
            id="colorScheme"
            onChange={(e) => setColorScheme(e.target.value)}
          >
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>

        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

// Export function
export default Dashboard;
