
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
				mortgage : 1,
				hostel : 1
			}
		},
		utility : {

			inputs : {
				electric : 1,
				water : 1
			}
		},
		transportation : {

			inputs : {
				plane : 1,
				train : 1,
				automobile : 1
			}
		},
		entertainment : {

			inputs : {
				movies : 1,
				books : 1
			}
		},
		misc : {

			inputs : {
				random1 : 1,
				random2 : 1
			}
		},
		income : {

			inputs : {
				salary : 5000,
				investment : 2,
				trust : 3,
				lottery : 4
			}
		}
	},
	__v : 0
}


function calcTotal (budget) {
  let expenses = [];
  let total = 0;
  Object.keys(budget).forEach((key) => {
    if (key !== "income") {
      expenses.push(...budget[key])
    }
  })
  expenses.forEach((obj) => {
    total += parseFloat(Object.values(obj))
  })
  console.log(total);
  return  parseFloat(total).toFixed(2)
}

function calcTotalExpenses (budget) {
  let total = 0
  Object.keys(budget.categories).forEach((category) => {
    Object.values(budget.categories[category].inputs).forEach((value) => {
        if (category != "income") {
         total += value
        }
    })
  })
  console.log(total);
  return total
}




export default calcTotal;

