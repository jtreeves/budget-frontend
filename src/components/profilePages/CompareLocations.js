import { useEffect, useState } from "react";
import calcFunctions from "../../utilities/calcFunctions";
import Cities from "../../utilities/Cities";
import CompareLocationsChart from "../elements/CompareLocationsChart";
import LocationIndices from '../elements/LocationIndices'

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
  const income = parseFloat((props.budget.income / 12).toFixed(2))
  const budgetTotals = calcFunctions.calcAllBudgetTotals([props.budget]);
  const NUMBEO_API_KEY = process.env.REACT_APP_NUMBEO_API_KEY;

  // fetches indices for budget location
  useEffect(() => {
    const fetchCityIndices = () => {
      fetch(
          'https://www.numbeo.com/api/indices?api_key=' + NUMBEO_API_KEY + '&query=' + props.budget.location
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
  }, [props.budget]);

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

  const convertCpi = (cpi) => {
    let difference = budgetLocationCPI - cpi;
    let newExpense = 0;
    if (difference < 0) {
      let positive = difference * -1;
      let multiple = positive / 100;
      let sum = budgetTotals[0].totalExpense * multiple;
      newExpense = budgetTotals[0].totalExpense + sum;
    } else {
      let multiple = difference / 100;
      let sum = budgetTotals[0].totalExpense * multiple;
      newExpense = budgetTotals[0].totalExpense - sum;
    }
    return parseFloat(newExpense.toFixed(2));
  };

  const formatSavings = (expense) => {
    return parseFloat((income - expense).toFixed(2));
  };

  const formatChartData = () => {
    const control = {
      name: props.budget.location,
      Expenses: budgetTotals[0].totalExpense,
      Savings: income - budgetTotals[0].totalExpense,
    };
    let chartData = [control];
    Object.keys(cityCPIS).forEach((key) => {
      let chartInput = {
        name: key,
        Expenses: convertCpi(cityCPIS[key]),
        Savings: formatSavings(convertCpi(cityCPIS[key])),
      };
      chartData.push(chartInput);
    });
    return chartData;
  };

  const addCpiState = async () => {
    await citiesToCompare.forEach((city) => {
      let cityAlreadyLoaded = false;
      Object.keys(cityCPIS).forEach((key) => {
        if (key === city) {
          cityAlreadyLoaded = true;
        }
      });
      if (!cityAlreadyLoaded) {
        fetch(
          `https://www.numbeo.com/api/indices?api_key=${NUMBEO_API_KEY}&query=${city}`
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
    console.log(selectedCity);
    let cityAlreadyAdded = false;
    let arrayCopy = citiesToCompare.slice();
    arrayCopy.forEach((city) => {
      if (city === selectedCity) {
        cityAlreadyAdded = true;
      }
    });
    if (cityAlreadyAdded || selectedCity === props.budget.location) {
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
      <button className="button-small" onClick={() => deleteCity({ city })} key={idx}>
        <span className="city-x">X</span>  {city}
      </button>
    );
  });

  return (
    <div className="div-compare-locations-page">
      <h2>Compare Locations</h2>

      <form noValidate>
        <p>Add a city to compare</p>
        <Cities
          setLocation={setSelectedCity}
          location={selectedCity}
          dontShowLabel={true}
        />
        <button onClick={(e) => {
          e.preventDefault();
          addCity();
        }}>
          Add
        </button>
      </form>

      <CompareLocationsChart data={formatChartData()} />

      <div className="div-compare-locations-footer">
        <div className="div-location-info">
          <p>Facts about your location</p>
          <h3>{props.budget.location}</h3>
          <LocationIndices 
            budgetLocationCPI={budgetLocationCPI}
            budgetLocationHealthCare={budgetLocationHealthCare}
            budgetLocationRent={budgetLocationRent}
            budgetLocationGroceries={budgetLocationGroceries}
            budgetLocationRestaurants={budgetLocationRestaurants}
          />
        </div>

        <div className="div-comparison-cities">{cities}</div>
      </div>
    </div>
  );
}

// Export function
export default CompareLocations;
