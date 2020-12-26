import CategoryDisplay from '../elements/CategoryDisplay'

function FoodAndDrinks(props) {

  return (
    <div>
      <h3>This is the Food and Drinnks page!!!!</h3>
      <CategoryDisplay
        addBudgetInput={props.addBudgetInput}
        budgetKey="foodAndDrinks"
        inputs={props.inputs}
      />
    </div>
  );
}

// Export function
export default FoodAndDrinks;