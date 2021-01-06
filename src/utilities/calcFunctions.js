

const formatCurrency = (num) => {
  return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(num)
}


function calcAllBudgetTotals (array) {
  let budgetTotals = []
  array.forEach((budget) => {
    let abbrevBudget = {
      title: budget.title,
      id: budget._id,
      totalExpense: 0,
      totalIncome: parseFloat((budget.income / 12).toFixed(2)),
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
    abbrevBudget.totalSavings = abbrevBudget.totalIncome - abbrevBudget.totalExpense
    budgetTotals.push(abbrevBudget)
  })
  return budgetTotals
}

function calcBudgetSubTotals (budget) {
  let budgetTotals = {}
  
  Object.keys(budget.categories).forEach((category) => {
    let sum = 0
    Object.values(budget.categories[category].inputs).forEach((value) => {
      sum += parseFloat(value)
    })
    budgetTotals[category] = sum
  })
  return budgetTotals
}

function calcCategoryTotal (inputs) {
  let total = 0
  Object.values(inputs).forEach((value) => {
    total += parseFloat(value)
  })
  return formatCurrency(total)
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
  formatCurrency,
  calcAllBudgetTotals
}


export default calcFunctions