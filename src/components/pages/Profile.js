import { Link } from "react-router-dom"
import { useAlert } from "react-alert"
import axios from "axios"

// Component Imports
import UserInfo from "../elements/UserInfo"
import UserNavigation from "../elements/UserNavigation"
import ProfileRoutes from "../elements/ProfileRoutes"
import Dashboard from "./Dashboard"
import { useState, useEffect } from "react"

function Profile(props) {
  // Variables and Props
  const alert = useAlert()
  const { handleLogout } = props
  const { exp, id, name, email } = props.user
  const backendUrl = process.env.REACT_APP_SERVER_URL
  const expirationTime = new Date(exp * 1000)
  let currentTime = Date.now()

  // State
  const [budget, setBudget] = useState({})
  const [budgetArray, setBudgetArray] = useState([])
  const [budgetsLoaded, setBudgetsLoaded] = useState(false)
  const [firstTimeUser, setFirstTimeUser] = useState(props.user.firstTimeUser)
  const [userName, setUserName] = useState(name)

  // Backend API crud
  useEffect(() => {
    if (firstTimeUser || firstTimeUser == null) {
      reFetchUser()
      return
    }
    async function fetchBudgets() {
      if (props.user) {
        let apiRes = await axios.get(backendUrl + "/budgets/all/" + id)
        let budgets = await apiRes.data.budgets
        await setBudget(budgets[0])
        await setBudgetArray(budgets)
        await setBudgetsLoaded(true)
      }
    }
    try {
      fetchBudgets()
    } catch (error) {
      console.log(error)
    }
  }, [backendUrl, id, props.user, firstTimeUser])

  useEffect(() => {
    async function autoSave() {
      if (budgetsLoaded) {
        let apiRes = await axios.put(backendUrl + "/budgets/" + budget._id, {
          categories: budget.categories,
        })
      }
    }
    try {
      autoSave()
    } catch (error) {
      console.log(error)
    }
  }, [budget])

  const reFetchUser = async () => {
    let apiRes = await axios.get(backendUrl + "/users/" + id)
    setFirstTimeUser(apiRes.data.user.firstTimeUser)
    setUserName(apiRes.data.user.name)
  }
  
  const reFetchBudgets = async (budget) => {
    if (budgetsLoaded) {
      let apiRes = await axios.get(backendUrl + "/budgets/all/" + id)
      let budgets = await apiRes.data.budgets
      await setBudgetArray(budgets)
      await budgets.forEach((ele) => {
        if (ele._id === budget._id) {
          setBudget(ele)
        }
      })
    } else {
      return
    }
  }

  const loadNewBudget = async () => {
    if (budgetsLoaded) {
      let apiRes = await axios.get(backendUrl + "/budgets/all/" + id)
      let budgets = await apiRes.data.budgets
      await setBudgetArray(budgets)
      await setBudget(budgets[budgets.length - 1])
    }
  }

  const deleteBudget = async (budgetId) => {
    async function resetBudgets() {
      let index = budgetArray.findIndex((ele) => ele._id === budgetId)
      let budgetArrayCopy = budgetArray.slice()
      budgetArrayCopy.splice(index, 1)
      await setBudgetArray(budgetArrayCopy)
      await setBudget(budgetArray[0])
      let apiRes = await axios.delete(backendUrl + "/budgets/" + budgetId)
      let apiRes2 = await axios.get(backendUrl + "/budgets/all/" + id)
      let budgets = await apiRes2.data.budgets
      await setBudgetArray(budgets)
      await setBudget(budgets[0])
    }
    try {
      resetBudgets()
    } catch (error) {
      console.log(error)
    }
  }

  // State funcitons
  const addBudgetInput = async (budgetKey, newInput) => {
    // This makes a deep copy of the budget
    let budgetCopy = JSON.parse(JSON.stringify(budget))
    // Now you can edit budgetCopy without changing budget
    budgetCopy.categories[budgetKey].inputs[newInput.inputName] =
      newInput.inputValue
    await setBudget(budgetCopy)
  }

  const deleteBudgetInput = (budgetKey, inputKey) => {
    // This makes a deep copy of the budget
    let budgetCopy = JSON.parse(JSON.stringify(budget))
    // Now you can edit budgetCopy without changing budget
    delete budgetCopy.categories[budgetKey].inputs[inputKey]
    setBudget(budgetCopy)
  }

  const switchBudgets = (budget) => {
    async function fetchBudgets() {
      if (props.user) {
        let apiRes = await axios.get(backendUrl + "/budgets/all/" + id)
        let budgets = await apiRes.data.budgets
        await setBudgetArray(budgets)
        budgetArray.forEach((ele) => {
          if (ele._id === budget._id) {
            setBudget(ele)
          } else {
            return
          }
        })
      }
    }
    fetchBudgets()
  }

  // Session Auto-Logout
  if (currentTime >= expirationTime) {
    handleLogout()
    alert.show("Session has ended. Please log in.")
  }

  const provideColorCode = (colorName, opacity) => {
    switch (colorName) {
      case 'Magenta':
        return `rgba(159, 46, 113, ${opacity})`
      case 'Red':
        return `rgba(158, 31, 20, ${opacity})`
      case 'Orange':
        return `rgba(234, 135, 50, ${opacity})`
      case 'Green':
        return `rgba(70, 117, 49, ${opacity})`
      case 'Blue':
        return `rgba(43, 106, 140, ${opacity})`
      case 'Purple':
        return `rgba(88, 41, 92, ${opacity})`
    }
  }

  const changeBkgColor = () => {
    if (
    window.location.pathname === '/profile/compare-budgets' ||
    window.location.pathname === '/profile/compare-locations') {
      return { backgroundColor: '#edeef1' }
    } else {
      return { backgroundColor: provideColorCode(budget.colorScheme, '0.2') }
    }
  }

  // Success Display
  const userData = budgetsLoaded ? (
    <>
      <UserNavigation
        user={props.user}
        handleLogout={handleLogout}
        budgetArray={budgetArray}
        loadNewBudget={loadNewBudget}
        switchBudgets={switchBudgets}
        reFetchBudgets={reFetchBudgets}
        />
      <div className="div-profile-page">
        <UserInfo
          budgetArray={budgetArray}
          deleteBudget={deleteBudget}
          userName={userName}
          name={name}
          email={email}
          id={id}
          reFetchBudgets={reFetchBudgets}
          reFetchUser={reFetchUser}
          budget={budget}
          handleLogout={handleLogout}
        />


        <div
          className="div-profile-workspace"
          style={changeBkgColor()}
        >
          <ProfileRoutes
            budgetArray={budgetArray}
            deleteBudgetInput={deleteBudgetInput}
            addBudgetInput={addBudgetInput}
            budget={budget}
            />
        </div>
      </div>
    </>
  ) : (
    <>
    <h4>Loading...</h4>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
  
  // Error Display
  const errorDiv = () => {
    return (
      <div>
        <h3>
          Please <Link to="/">login</Link> to view this page
        </h3>
      </div>
    )
  }
  
  // Choose Display 
  const displayFilter = () => {
    if (props.user) {
      if (firstTimeUser) {
        return <Dashboard reFetchUser={reFetchUser} user={props.user}/>
      } else {
        return userData
      }
    } else {
      errorDiv()
    }
  }
  // Profile Return
  return <>{displayFilter()}</>
}

// Export function
export default Profile