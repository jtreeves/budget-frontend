import { useEffect, useState } from "react";
import calcFunctions from "../../utilities/calcFunctions";
import Cities from "../../utilities/Cities";
import axios from "axios";
import AllBudgetsChartTotals from "../elements/AllBudgetsChartTotals";

function CompareLocations(props) {
  const [citiesToCompare, setCitiesToCompare] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Albany, NY");
  const [budgetLocationCPI, setBudgetLocationCPI] = useState(null);
  const [budgetLocationGroceries, setBudgetLocationGroceries] = useState(null);
  const [budgetLocationRestaurants, setBudgetLocationRestaurants] = useState(
    null
  );
  const [budgetLocationHealthCare, setBudgetLocationHealthCare] = useState(
    null
  );
  const [budgetLocationRent, setBudgetLocationRent] = useState(null);
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
          if (data.groceries_index) {
            setBudgetLocationGroceries(data.groceries_index);
          }
          if (data.restaurant_price_index) {
            setBudgetLocationRestaurants(data.restaurant_price_index);
          }
          if (data.health_care_index) {
            setBudgetLocationHealthCare(data.health_care_index);
          }
          if (data.rent_index) {
            setBudgetLocationRent(data.rent_index);
          }
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
    return (
      <li key={idx}>
        {city}: {cityCPIS[city]}
      </li>
    );
  });

  const showOverall = () => {
    if (budgetLocationCPI) {
      return (
        <h3>
          Overall: {ordinal_suffix_of(Math.round(budgetLocationCPI))} Percentile
        </h3>
      );
    } else {
      return <h3>Overall: Loading...</h3>;
    }
  };

  const showGroceries = () => {
    if (budgetLocationGroceries) {
      return (
        <h3>
          Groceries: {ordinal_suffix_of(Math.round(budgetLocationGroceries))}{" "}
          Percentile
        </h3>
      );
    } else {
      return <h3>Groceries: Loading...</h3>;
    }
  };

  const showRestaurants = () => {
    if (budgetLocationRestaurants) {
      return (
        <h3>
          Restaurants:{" "}
          {ordinal_suffix_of(Math.round(budgetLocationRestaurants))} Percentile
        </h3>
      );
    } else {
      return <h3>Restaurants: Loading...</h3>;
    }
  };

  const showRent = () => {
    if (budgetLocationRent) {
      return (
        <h3>
          Rent: {ordinal_suffix_of(Math.round(budgetLocationRent))} Percentile
        </h3>
      );
    } else {
      return <h3>Rent: Loading...</h3>;
    }
  };

  const showHealth = () => {
    if (budgetLocationHealthCare) {
      return (
        <h3>
          HealthCare: {ordinal_suffix_of(Math.round(budgetLocationHealthCare))}{" "}
          Percentile
        </h3>
      );
    } else {
      return <h3>HealthCare: Loading...</h3>;
    }
  };

  function ordinal_suffix_of(i) {
    let j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (
    <div>
      <h2>Compare Locations</h2>
      <div>
        <h3>Your Location: {props.budget.location}</h3>
        <div className="helper">
          {showOverall()}
          {showRent()}
          {showHealth()}
          {showGroceries()}
          {showRestaurants()}
        </div>
        <h3>Add city to compare</h3>
        <Cities
          setLocation={setSelectedCity}
          location={selectedCity}
          dontShowLabel={true}
        />
        <button onClick={() => addCity()}>Add City</button>
        <div>{cities}</div>
        <ul>{comparisonCities}</ul>
      </div>
    </div>
  );
}

// Export function
export default CompareLocations;
