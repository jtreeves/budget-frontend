import CompactDisplay from "../elements/CompactDisplay";
import CompactTotal from "../elements/CompactTotal";

function DefaultProfile(props) {
  // Placeholders for user data
  let inputArray = ["Rent: $934.23", "Insurance: $55.34", "Upkeep: $100.67"];
  let inputArrayIncome = [
    "Trustfund: 934.23",
    "Loterry Winnings: $55.34",
    "Stimulus Check: $100.67",
  ];

  return (
    <div>
      <h2>Budget</h2>
      <CompactDisplay title="Income" inputs={inputArrayIncome} total="$1090.24" income={props.budget.income}/>
      <CompactTotal total="2,453.67" />
      <CompactDisplay title="Housing" inputs={inputArray} total="$1090.24" housing={props.budget.housing}/>
      <CompactDisplay title="Transportation" inputs={inputArray} total="$1090.24" transportation={props.budget.transportation}/>
      <CompactDisplay title="Food/Groceries" inputs={inputArray} total="$1090.24" foodAndDrinks={props.budget.foodAndDrinks}/>
    </div>
  );
}

// Export function
export default DefaultProfile;

