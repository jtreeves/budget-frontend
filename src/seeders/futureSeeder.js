// const budgetSeed = {
//   housing: [
//     {"Rent": 1290.23},
//     {"Insurance": 123.43},
//     {"Upkeep": 87.23},
//     {"Lawn Maint.": 45.00}
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


const budgetSeed = {
	_id : "ObjectId(5fea0001d7ff59802441de45)",
	date : "ISODate2020-12-28T15:54:48.224Z)",
	user : "ObjectId(5fe39c7f19256ceffb806410)",
	categories : {
		housing : {
			// date : ISODate("2020-12-28T15:54:48.219Z"),
			// _id : ObjectId("5fea0001d7ff59802441de46"),
			inputs : {
				rent : 0,
				mortgage : 0,
				hostel : 0
			}
		},
		utility : {
			// date : ISODate("2020-12-28T15:54:48.222Z"),
			// _id : ObjectId("5fea0001d7ff59802441de47"),
			inputs : {
				electric : 0,
				water : 0
			}
		},
		transportation : {
			// // date : ISODate("2020-12-28T15:54:48.223Z"),
			// _id : ObjectId("5fea0001d7ff59802441de48"),
			inputs : {
				plane : 0,
				train : 0,
				automobile : 0
			}
		},
		entertainment : {
			// date : ISODate("2020-12-28T15:54:48.223Z"),
			// _id : ObjectId("5fea0001d7ff59802441de49"),
			inputs : {
				movies : 0,
				books : 0
			}
		},
		misc : {
			// date : ISODate("2020-12-28T15:54:48.223Z"),
			// _id : ObjectId("5fea0001d7ff59802441de4a"),
			inputs : {
				random1 : 0,
				random2 : 0
			}
		},
		income : {
			// date : ISODate("2020-12-28T15:54:48.224Z"),
			// _id : ObjectId("5fea0001d7ff59802441de4b"),
			inputs : {
				salary : 0,
				investment : 0,
				trust : 0,
				lottery : 0
			}
		}
	},
	__v : 0
}

export default budgetSeed