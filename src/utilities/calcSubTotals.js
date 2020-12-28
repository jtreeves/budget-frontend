const budgetSeed = {
  housing: [
    {"Rent": 1290.23},
    {"Insurance": 123.43},
    {"Upkeep": 87.23}
  ],
  utilities: [
    {"Internet": 56.34},
    {"Water": 78.23},
    {"Electricity": 123.43}
  ],
  foodAndDrinks: [
    {"Groceries": 345.23},
    {"Eating Out": 289.96},
    {"Boozing": 97.23}
  ],
  transportation: [
    {"Car Insurance": 125.65},
    {"Car Maintinence": 55.76},
    {"Gas": 176.64}
  ],
  misc: [
    {"Netflix": 12},
    {"Books": 34.54},
    {"Movie Theatre": 54.23}
  ],
  income: [
    {"Trust-fund": 2378.23},
    {"Lottery Winnings": 500},
    {"Stimulus Check": 600}
  ] 
}

const budgetSeed2 = {
	_id : "ObjectId(5fea0001d7ff59802441de45)",
	date : "ISODate2020-12-28T15:54:48.224Z)",
	user : "ObjectId(5fe39c7f19256ceffb806410)",
	categories : {
		housing : {

			inputs : {
				rent : 1,
				mortgage : 2,
				hostel : 3
			}
		},
		utility : {

			inputs : {
				electric : 4,
				water : 5
			}
		},
		transportation : {

			inputs : {
				plane : 6,
				train : 7,
				automobile : 8
			}
		},
		entertainment : {

			inputs : {
				movies : 1,
				books : 2
			}
		},
		misc : {

			inputs : {
				random1 : 3,
				random2 : 4
			}
		},
		income : {

			inputs : {
				salary : 1,
				investment : 2,
				trust : 3,
				lottery : 4
			}
		}
	},
	__v : 0
}


function calcSubTotals (budget) {

  let budgetTotals = {};
  Object.keys(budget).forEach((key) => {
      let total = 0;
      budget[key].forEach((obj) => {
        total += parseFloat(Object.values(obj))
        budgetTotals[key] = total.toFixed(2)
      }) 
  })
  console.log(budgetTotals);
  return budgetTotals;
}

function calcSubTotalsBackend (budget) {
  let budgetTotals = {};
  
  Object.keys(budget.categories).forEach((category) => {
    let sum = 0;
    Object.values(budget.categories[category].inputs).forEach((value) => {
      sum += value;
    })
    budgetTotals[category] = sum;
  })
  console.log(budgetTotals);
  return budgetTotals;
}

// calcSubTotalsBackend(budgetSeed2)



// export default calcSubTotals;