// Create function
import calcFunctions from "../../utilities/calcFunctions"
function CompactDisplay(props) {
    const inputs = Object.keys(props.inputs).map((inputKey, idx) => {
        return <li key={idx}>
            {inputKey}: {calcFunctions.formatCurrency(props.inputs[inputKey])}
        </li>
    })

    return (
        <div className="compact-container">
            <div
                id={props.compactContainerId} 
                className="div-color-bar"
            >
            </div>
            
            <div className="compact-container-text">
                <div>
                    <h3>{props.title}</h3>
                    <ul>{inputs}</ul>
                </div>

                <div>
                    <p className="currency">
                        {calcFunctions.formatCurrency(props.total)}
                    </p>
                    <p className="timeframe">
                        Per Month
                    </p>
                </div>
            </div>
        </div>
    )
}

// Export function
export default CompactDisplay