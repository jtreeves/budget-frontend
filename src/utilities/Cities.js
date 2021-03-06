const cities = [
    "San Francisco, CA",
    "New York, NY",
    "Oakland, CA",
    "Boston, MA	",
    "Washington, DC	",
    "San Jose, CA	",
    "Seattle, WA",
    "Los Angeles, CA",
    "Honolulu, HI",
    "Irvine, CA",
    "San Diego, CA",
    "Miami, FL",
    "Chicago, IL",
    "Fort Lauderdale, FL",
    "Charleston, SC",
    "Portland, OR",
    "Anchorage, AK",
    "Minneapolis, MN",
    "Philadelphia, PA",
    "Denver, CO",
    "Sacramento, CA",
    "Ann Arbor, MI",
    "Atlanta, GA",
    "Charlotte, NC",
    "Nashville, TN",
    "Asheville, NC",
    "Baltimore, MD",
    "New Orleans, LA",
    "Tampa, FL",
    "Cleveland, OH",
    "Pittsburgh, PA",
    "Milwaukee, WI",
    "Austin, TX",
    "Dallas, TX",
    "Orlando, FL",
    "Olympia, WA",
    "Detroit, MI",
    "Colorado Springs, CO",
    "Birmingham, AL",
    "Reno, NV",
    "Raleigh, NC",
    "Albany, NY",
    "Las Vegas, NV",
    "Knoxville, TN",
    "Columbus, OH",
    "Rochester, NY",
    "Spokane, WA",
    "Phoenix, AZ",
    "San Antonio, TX",
    "Richmond, VA",
    "Eugene, OR",
    "Salt Lake City, UT",
    "Kansas City, MO",
    "Kelowna, Canada",
    "Buffalo, NY",
    "Cincinnati, OH",
    "Tucson, AZ",
    "Des Moines, IA",
    "Boise, ID",
    "Fresno, CA",
    "Tulsa, OK",
    "Huntsville, AL",
    "Albuquerque, NM",
    "Memphis, TN",
    "Wichita, KS",
    "El Paso, TX"
]

function Cities(props) {
    const options = cities.sort().map((city, idx) => {
        return <option key={idx} value={city}>{city}</option>
    })

    function dontShowLabel() {
        if (props.dontShowLabel) {
            return
        } else {
            return (
                <label htmlFor="cities">
                    <strong>Location</strong>
                </label>
            )
        }
    }  

    return (
        <div>
            {dontShowLabel()}
            <select 
                value={props.location} 
                onChange={(e) => props.setLocation(e.target.value)} 
                name="cities" 
                id="cities"
            >
                {options}
            </select>
        </div>
    )
}

export default Cities