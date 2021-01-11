function LocationIndices(props) {
    const showOverall = () => {
        if (props.budgetLocationCPI) {
            return (
                <p>
                    <strong>Overall Cost of Living:</strong> {ordinal_suffix_of(Math.round(props.budgetLocationCPI))} Percentile
                </p>
            )
        } else {
            return <p><strong>Overall:</strong> Loading...</p>
        }
    }
  
    const showRestaurants = () => {
        if (props.budgetLocationRestaurants) {
            return (
                <p>
                    <strong>Restaurants:</strong>{" "}
                    {ordinal_suffix_of(Math.round(props.budgetLocationRestaurants))} Percentile
                </p>
            )
        } else {
            return <p><strong>Restaurants:</strong> Loading...</p>
        }
    }
  
    const showGroceries = () => {
        if (props.budgetLocationGroceries) {
            return (
                <p>
                    <strong>Groceries:</strong> {ordinal_suffix_of(Math.round(props.budgetLocationGroceries))}{" "}
                    Percentile
                </p>
            )
        } else {
            return <p><strong>Groceries:</strong> Loading...</p>
        }
    }
  
    const showHealth = () => {
        if (props.budgetLocationHealthCare) {
            return (
                <p>
                    <strong>HealthCare:</strong> {ordinal_suffix_of(Math.round(props.budgetLocationHealthCare))}{" "}
                    Percentile
                </p>
            )
        } else {
            return <p><strong>HealthCare:</strong> Loading...</p>
        }
    }
  
    const showRent = () => {
        if (props.budgetLocationRent) {
            return (
                <p>
                    <strong>Rent:</strong> {ordinal_suffix_of(Math.round(props.budgetLocationRent))} Percentile
                </p>
            )
        } else {
            return <p><strong>Rent:</strong> Loading...</p>
        }
    }
  
    function ordinal_suffix_of(i) {
        let j = i % 10, k = i % 100
        if (j === 1 && k !== 11) {
            return i + "st"
        }
        if (j === 2 && k !== 12) {
            return i + "nd"
        }
        if (j === 3 && k !== 13) {
            return i + "rd"
        }
        return i + "th"
    }
  
    return (
        <div>
            {showOverall()}
            {showRent()}
            {showHealth()}
            {showGroceries()}
            {showRestaurants()}
        </div>
    )
}
  
// Export function
export default LocationIndices