// const budgetSeed = {
//   housing: [
//     {"Rent": 1290.23},
//     {"Insurance": 123.43},
//     {"Upkeep": 87.23}
//   ],
//   utilities: [
//     {"Internet": 56.34},
//     {"Water": 78.23},
//     {"Electricity": 123.43}
//   ],
//   foodAndDrinks: [
//     {"Groceries": 345.23},
//     {"Eating Out": 289.96},
//     {"Boozing": 97.23}
//   ],
//   transportation: [
//     {"Car Insurance": 125.65},
//     {"Car Maintinence": 55.76},
//     {"Gas": 176.64}
//   ],
//   misc: [
//     {"Netflix": 12},
//     {"Books": 34.54},
//     {"Movie Theatre": 54.23}
//   ],
//   income: [
//     {"Trust-fund": 2378.23},
//     {"Lottery Winnings": 500},
//     {"Stimulus Check": 600}
//   ] 
// }


function calcSubTotals (budget) {

  let budgetTotals = {};
  Object.keys(budget).forEach((key) => {
      let total = 0;
      budget[key].forEach((obj) => {
        total += parseFloat(Object.values(obj))
        budgetTotals[key] = total.toFixed(2)
      }) 
  })
  return budgetTotals;
}




export default calcSubTotals;