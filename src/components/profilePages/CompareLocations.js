import { useEffect, useState } from "react";
import calcFunctions from "../../utilities/calcFunctions";
import Cities from "../../utilities/Cities";
import axios from "axios";
import AllBudgetsChartTotals from "../elements/AllBudgetsChartTotals";

function CompareLocations(props) {
  const [citiesToCompare, setCitiesToCompare] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Albany, NY");
  const [budgetLocationCPI, setBudgetLocationCPI] = useState(null);
  const [cityCPIS, setCityCPIS] = useState({});
  const budgetTotals = calcFunctions.calcAllBudgetTotals([props.budget]);
  const NUMBEO_API_KEY = process.env.NUMBEO_API_KEY;

  // fetches indices for budget location
  useEffect(() => {
    const fetchCityIndices = () => {
      fetch(
        `https://www.numbeo.com/api/indices?api_key=qt1nz2cebg6wjk&query=${props.budget.location}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let cityCpi = data.cpi_and_rent_index;
          setBudgetLocationCPI(cityCpi);
        });
    };
    fetchCityIndices();
  }, []);

  // fetches indices for comparison locations
  useEffect(() => {
    const fetchCityIndices = () => {
      if (Object.keys(cityCPIS).length > citiesToCompare.length) {
        removeCpiState();
      } else {
        addCpiState();
      }
    };
    fetchCityIndices();
  }, [citiesToCompare]);

  const addCpiState = async () => {
    await citiesToCompare.forEach((city) => {
      let cityAlreadyLoaded = false;
      Object.keys(cityCPIS).forEach((key) => {
        if (key === city) {
          cityAlreadyLoaded = true;
        }
      });
      if (!cityAlreadyLoaded) {
        console.log("fetching for " + city);
        fetch(
          `https://www.numbeo.com/api/indices?api_key=qt1nz2cebg6wjk&query=${city}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            let cityCpi = data.cpi_and_rent_index;
            let cpisCopy = JSON.parse(JSON.stringify(cityCPIS));
            cpisCopy[city] = cityCpi;
            setCityCPIS(cpisCopy);
          });
      }
    });
  };

  const removeCpiState = async () => {
    Object.keys(cityCPIS).forEach((key) => {
      let keyFound = false;
      citiesToCompare.forEach((city) => {
        if (key === city) {
          keyFound = true;
        }
      });
      if (keyFound) {
        return;
      } else {
        let cpisCopy = JSON.parse(JSON.stringify(cityCPIS));
        delete cpisCopy[key];
        setCityCPIS(cpisCopy);
      }
    });
  };

  const addCity = () => {
    let cityAlreadyAdded = false;
    let arrayCopy = citiesToCompare.slice();
    arrayCopy.forEach((city) => {
      if (city === selectedCity) {
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
    let arrayCopy = citiesToCompare.slice();
    let index = arrayCopy.indexOf(cityObj.city);
    if (index !== -1) {
      arrayCopy.splice(index, 1);
    }
    setCitiesToCompare(arrayCopy);
  };

  const cities = citiesToCompare.map((city, idx) => {
    return (
      <button onClick={() => deleteCity({ city })} key={idx}>
        {city}
      </button>
    );
  });

  const comparisonCities = Object.keys(cityCPIS).map((city, idx) => {
    return <li key={idx}>{city}: {cityCPIS[city]}</li>
  })

  const showCpi = () => {
    if (budgetLocationCPI) {
      return <h3>Numbeo Cpi: {budgetLocationCPI}</h3>;
    } else {
      return <h3>Numbeo Cpi: Loading...</h3>;
    }
  };


  return (
    <div>
      <h2>Compare Locations</h2>
      <div>
        <h3>Your Location: {props.budget.location}</h3>
        <h3>Income: ${budgetTotals[0].totalIncome}</h3>
        <h3>Expenses: ${budgetTotals[0].totalExpense}</h3>
        <h3>Savings: ${budgetTotals[0].totalSavings}</h3>
        {showCpi()}
        <h3>Add city to compare</h3>
        <Cities
          setLocation={setSelectedCity}
          location={selectedCity}
          dontShowLabel={true}
        />
        <button onClick={() => addCity()}>Add City</button>
        <div>{cities}</div>
        <ul>
          {comparisonCities}
        </ul>
      </div>
    </div>
  );
}

// Export function
export default CompareLocations;
