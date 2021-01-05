function LocationIndices(props) {

  const showOverall = () => {
    if (props.budgetLocationCPI) {
      return (
        <h3>
          Overall: {ordinal_suffix_of(Math.round(props.budgetLocationCPI))} Percentile
        </h3>
      );
    } else {
      return <h3>Overall: Loading...</h3>;
    }
  };

  const showRestaurants = () => {
    if (props.budgetLocationRestaurants) {
      return (
        <h3>
          Restaurants:{" "}
          {ordinal_suffix_of(Math.round(props.budgetLocationRestaurants))} Percentile
        </h3>
      );
    } else {
      return <h3>Restaurants: Loading...</h3>;
    }
  };

  const showGroceries = () => {
    if (props.budgetLocationGroceries) {
      return (
        <h3>
          Groceries: {ordinal_suffix_of(Math.round(props.budgetLocationGroceries))}{" "}
          Percentile
        </h3>
      );
    } else {
      return <h3>Groceries: Loading...</h3>;
    }
  };

  const showHealth = () => {
    if (props.budgetLocationHealthCare) {
      return (
        <h3>
          HealthCare: {ordinal_suffix_of(Math.round(props.budgetLocationHealthCare))}{" "}
          Percentile
        </h3>
      );
    } else {
      return <h3>HealthCare: Loading...</h3>;
    }
  };

  const showRent = () => {
    if (props.budgetLocationRent) {
      return (
        <h3>
          Rent: {ordinal_suffix_of(Math.round(props.budgetLocationRent))} Percentile
        </h3>
      );
    } else {
      return <h3>Rent: Loading...</h3>;
    }
  };

  function ordinal_suffix_of(i) {
    let j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (
    <div>
      {showOverall()}
      {showRent()}
      {showHealth()}
      {showGroceries()}
      {showRestaurants()}
    </div>
  );
}

// Export function
export default LocationIndices;
