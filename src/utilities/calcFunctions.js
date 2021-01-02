
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


// const budgetSeed2 = {
// 	_id : "ObjectId(5fea0001d7ff59802441de45)",
// 	date : "ISODate2020-12-28T15:54:48.224Z)",
// 	user : "ObjectId(5fe39c7f19256ceffb806410)",
// 	categories : {
// 		housing : {

// 			inputs : {
// 				rent : 1,
// 				mortgage : 1,
// 				hostel : 1
// 			}
// 		},
// 		utility : {

// 			inputs : {
// 				electric : 1,
// 				water : 1
// 			}
// 		},
// 		transportation : {

// 			inputs : {
// 				plane : 1,
// 				train : 1,
// 				automobile : 1
// 			}
// 		},
// 		entertainment : {

// 			inputs : {
// 				movies : 1,
// 				books : 1
// 			}
// 		},
// 		misc : {

// 			inputs : {
// 				random1 : 1,
// 				random2 : 1
// 			}
// 		},
// 		income : {

// 			inputs : {
// 				salary : 5000,
// 				investment : 2,
// 				trust : 3,
// 				lottery : 4
// 			}
// 		}
// 	},
// 	__v : 0
// }


// let budgets = [{
//   _id: 321,
// 	title : "Budget 1",
// 	colorScheme : "Blue",
// 	categories : {
// 		housing : {

// 			inputs : {
// 				rent : 234,
// 				mortage : 1000
// 			}
// 		},
// 		utility : {

// 			inputs : {

// 			}
// 		},
// 		food : {

// 			inputs : {
// 				ert45 : 345,
// 				eghh : 345
// 			}
// 		},
// 		transportation : {

// 			inputs : {

// 			}
// 		},
// 		entertainment : {

// 			inputs : {

// 			}
// 		},
// 		misc : {

// 			inputs : {

// 			}
// 		},
// 		income : {

// 			inputs : {
// 				asdf : 234,
// 				asdff : 234
// 			}
// 		}
// 	},
// 	__v : 0
// },
// {
//   _id: 123,
// 	title : "Budget 2",
// 	colorScheme : "Red",
// 	categories : {
// 		housing : {

// 			inputs : {
// 				rent : 234
// 			}
// 		},
// 		utility : {

// 			inputs : {

// 			}
// 		},
// 		food : {

// 			inputs : {
// 				ert : 345
// 			}
// 		},
// 		transportation : {

// 			inputs : {
// 				sdf : 234,
// 				sdf4 : 234,
// 				sdf42 : 234
// 			}
// 		},
// 		entertainment : {

// 			inputs : {

// 			}
// 		},
// 		misc : {

// 			inputs : {
// 				sdfg : 345
// 			}
// 		},
// 		income : {

// 			inputs : {

// 			}
// 		}
// 	},
// 	__v : 0
// }]
// let test = {salary: 1, investment: 2, trust: 3, lottery: 4}
function calcAllBudgetTotals (array) {
  let budgetTotals = [];
  array.forEach((budget) => {
    let abbrevBudget = {
      title: budget.title,
      id: budget._id,
      totalExpense: 0,
      totalIncome: 0,
    }
    Object.keys(budget.categories).forEach((key) => {
      let total = 0
      Object.values(budget.categories[key]).forEach((inputs) => {
        if (key === "income") {
          if (typeof inputs === "object") {          
            Object.keys(inputs).forEach((key) => {
              abbrevBudget.totalIncome += parseFloat(inputs[key])
            })
          } 
        } else {
          if (typeof inputs === "object") {          
            Object.keys(inputs).forEach((key) => {
              abbrevBudget.totalExpense += parseFloat(inputs[key])
            })
          } 
        }
      })
    })
    budgetTotals.push(abbrevBudget)
  })
  return budgetTotals
}


function calcBudgetSubTotals (budget) {
  let budgetTotals = {};
  
  Object.keys(budget.categories).forEach((category) => {
    let sum = 0;
    Object.values(budget.categories[category].inputs).forEach((value) => {
      sum += parseFloat(value)
    })
    budgetTotals[category] = sum;
  })
  return budgetTotals;
}

function calcCategoryTotal (inputs) {
  let total = 0;
  Object.values(inputs).forEach((value) => {
    total += parseFloat(value)
  })
  return total;
}

function calcExpenseTotals (budget) {
  let total = 0
  Object.keys(budget.categories).forEach((category) => {
    Object.values(budget.categories[category].inputs).forEach((value) => {
        if (category !== "income") {
         total += parseFloat(value)
        }
    })
  })
  return total
}

const calcFunctions = {
  calcExpenseTotals,
  calcCategoryTotal,
  calcBudgetSubTotals,
  calcAllBudgetTotals
}


export default calcFunctions;

