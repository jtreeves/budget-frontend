import { useState, useEffect } from "react"
import BudgetInfo from "./BudgetInfo"
import DeleteBudgetChoices from "./DeleteBudgetChoices"
import EditBudgetForm from "../../utilities/EditBudgetForm"
import EditUserForm from "../../utilities/EditUserForm"
import calcFunctions from "../../utilities/calcFunctions"
import UserInfoPieChart from "./UserInfoPieChart"
import axios from "axios"
import { useAlert } from "react-alert"

function UserInfo(props) {
    const alert = useAlert()
    const [displayForm, setDisplayForm] = useState(false)
    const [deletePressed, setDeletePressed] = useState(false)
    const [budgetName, setBudgetName] = useState(props.budget.title)
    const [colorScheme, setColorScheme] = useState(props.budget.colorScheme)
    const [location, setLocation] = useState(props.budget.location)
    const [income, setIncome] = useState(props.budget.income)
    const [userName, setUserName] = useState(props.userName)
    const [userDeletePressed, setUserDeletePressed] = useState(false)
    const [editNamePressed, setEditNamePressed] = useState(false)
    const subTotals = calcFunctions.calcBudgetSubTotals(props.budget)
    const monthlyExpense = calcFunctions.formatCurrency(calcFunctions.calcExpenseTotals(props.budget))
    const monthlyExpenseNum = calcFunctions.calcExpenseTotals(props.budget)
    const monthlyIncome = calcFunctions.formatCurrency(props.budget.income / 12)
    const monthlyIncomeNum = props.budget.income / 12
    const budgetDifference = calcFunctions.formatCurrency(monthlyIncomeNum - monthlyExpenseNum)
    const backendUrl = process.env.REACT_APP_SERVER_URL

    useEffect(() => {
        setDisplayForm(false)
        setBudgetName(props.budget.title)
        setIncome(props.budget.income)
        setLocation(props.budget.location)
        setColorScheme(props.budget.colorScheme)
    }, [props.budget])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (budgetName === "") {
            alert.show("Budget must have a name")
            return
        }  
        if (income === "") {
            alert.show("Income must has a value")
            return
        }
        await axios.put(backendUrl + "/budgets/" + props.budget._id, {
            title: budgetName,
            colorScheme: colorScheme,
            categories: props.budget.categories,
            location: location,
            income: income
        })
        setDisplayForm(false)
        props.reFetchBudgets(props.budget)
    }

    const handleUserSubmit = async (e) => {
        e.preventDefault()    
        if (userName === "") {
            alert.show("User must have a name")
            return
        }  
        await axios.put(backendUrl + "/users/" + props.id, {
            newName: userName
        })
        setEditNamePressed(false)
        props.reFetchUser()
    }

    const userInfoButtons = () => {
        if (!userDeletePressed) {
            return (
                <div className="div-user-delete">
                    <button 
                        className="button-small" 
                        onClick={() => setUserDeletePressed(true)}
                    >
                        Delete Account
                    </button>
                </div>
            )
        } else if (userDeletePressed) {
            return (
                <div className="div-user-delete-confirm">
                    <p>Are you sure?</p>
                    <div>
                        <button 
                            className="button-small button-left" 
                            onClick={deleteUser}
                        >
                            Delete
                        </button>
                        <button 
                            className="button-small" 
                            onClick={() => setUserDeletePressed(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )
        }
    }

    const userNameButtons = () => {
        if(!editNamePressed) {
            return(
                <div className="div-user-edit">
                    <button 
                        className="button-small" 
                        onClick={() => setEditNamePressed(true)}
                    >
                        Edit Name
                    </button>
                </div>
            )
        } else if (editNamePressed) {
            return (
                <div className="div-user-edit-confirm">
                    <EditUserForm 
                        userName={userName}
                        setUserName={setUserName}
                    />
                    <div>
                        <button 
                            className="button-small button-left" 
                            onClick={(e) => handleUserSubmit(e)}
                        >
                            Update
                        </button>
                        <button 
                            className="button-small" 
                            onClick={() => setEditNamePressed(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )
        }
    }

    const deleteUser = async () => {
        props.handleLogout()
        await axios.delete(backendUrl + "/users/" + props.id)
    }

    const resetInputFields = () => {
        setColorScheme(props.budget.colorScheme)
        setDisplayForm(true)
    }

    const infoOrForm = () => {
        if (displayForm && !deletePressed) {
            return (
                <EditBudgetForm
                    currentColor={props.budget.colorScheme}
                    colorsAvailable={props.colorsAvailable}
                    location={location}
                    setLocation={setLocation}
                    income={income}
                    setIncome={setIncome}
                    setDisplayForm={setDisplayForm}
                    handleSubmit={handleSubmit}
                    setBudgetName={setBudgetName}
                    setColorScheme={setColorScheme}
                    colorScheme={colorScheme}
                    budgetName={budgetName}
                    _id={props.budget._id}
                />
            )
        } else if (deletePressed) {
            return (
                <DeleteBudgetChoices
                    deleteBudget={props.deleteBudget}
                    setDeletePressed={setDeletePressed}
                    title={props.budget.title}
                    colorScheme={props.budget.colorScheme}
                    _id={props.budget._id}
                    budget={props.budget}
                />
            )
        } else {
            return (
                <BudgetInfo
                    resetInputFields={resetInputFields}
                    budgetArray={props.budgetArray}
                    setDisplayForm={setDisplayForm}
                    title={props.budget.title}
                    colorScheme={props.budget.colorScheme}
                    location={props.budget.location}
                    income={props.budget.income}
                    _id={props.budget._id}
                    setDeletePressed={setDeletePressed}
                />
            )
        }
    }

    const provideColorCode = (colorName) => {
        switch (colorName) {
            case 'Magenta':
                return '#9f2e71'
            case 'Red':
                return '#aa0100'
            case 'Orange':
                return '#f68200'
            case 'Green':
                return '#367724'
            case 'Blue':
                return '#116b90'
            case 'Purple':
                return '#5e235f'
            default: 
                break
        }
    }

    return (
        <div className="div-user-info">
            <div className="div-user-name">
                <h4>{props.userName}</h4>
                <button 
                    className="button-small" 
                    onClick={props.handleLogout}
                >
                    Log Out
                </button>
            </div>

            <div className="div-current-budget">
                <div 
                    className="div-budget-name" 
                    style={{ backgroundColor: provideColorCode(props.budget.colorScheme) }}
                >
                    <h2>{props.budget.title}</h2>
                </div>
                <div className="div-budget-summary">
                    <UserInfoPieChart 
                        subTotals={subTotals} 
                        income={monthlyIncomeNum} 
                    />
                    <h4>Monthly Income: {monthlyIncome}</h4>
                    <h4>Total Expenses: {monthlyExpense}</h4>
                    <h3>{budgetDifference}</h3>
                    <p>left over each month</p>
                    {infoOrForm()}
                </div>
            </div>

            <div className="div-account-settings">
                <h4>Account Settings</h4>
                {userNameButtons()}
                {userInfoButtons()}
            </div>
        </div>
    )
}

// Export function
export default UserInfo