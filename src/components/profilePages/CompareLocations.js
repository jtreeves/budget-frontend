import { useState } from "react";
import calcFunctions from "../../utilities/calcFunctions";
import Cities from "../../utilities/Cities";
import AllBudgetsChartTotals from "../elements/AllBudgetsChartTotals";

function CompareLocations(props) {
  const [citiesToCompare, setCitiesToCompare] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Albany, NY");
  const budgetTotals = calcFunctions.calcAllBudgetTotals([props.budget]);

  const addCity = () => {
    let cityAlreadyAdded = false;
    console.log(selectedCity);
    let arrayCopy = citiesToCompare.slice();
    arrayCopy.forEach((city) => {
      if (city === selectedCity) {
        console.log("hey");
        cityAlreadyAdded = true;
      }
    });
    if (cityAlreadyAdded) {
      return;
    } else {
      arrayCopy.push(selectedCity);
      setCitiesToCompare(arrayCopy);
    }
  };

  const deleteCity = (cityObj) => {
    console.log(cityObj);
    let arrayCopy = citiesToCompare.slice();
    let index = arrayCopy.indexOf(cityObj.city);
    if (index !== -1) {
      arrayCopy.splice(index, 1);
    }
    setCitiesToCompare(arrayCopy)
  };

  const cities = citiesToCompare.map((city, idx) => {
    return (
      <button onClick={() => deleteCity({ city })} key={idx}>
        {city}
      </button>
    );
  });
  return (
    <div>
      <h2>Compare Locations</h2>
      <div>
        <h3>Your Location: {props.budget.location}</h3>
        <h3>Income: ${budgetTotals[0].totalIncome}</h3>
        <h3>Expenses: ${budgetTotals[0].totalExpense}</h3>
        <h3>Savings: ${budgetTotals[0].totalSavings}</h3>
        <h3>Add city to compare</h3>
        <Cities
          setLocation={setSelectedCity}
          location={selectedCity}
          dontShowLabel={true}
        />
        <button onClick={() => addCity()}>Add City</button>
        <div>{cities}</div>
      </div>
    </div>
  );
}

// Export function
export default CompareLocations;
