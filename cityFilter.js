

function test() {
  let removeCities = []
  cities2.forEach((city) => {
    fetch(
      `https://www.numbeo.com/api/indices?api_key=qt1nz2cebg6wjk&query=${city}`
      )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        let cityCpi = data.cpi_and_rent_index
        if (cityCpi === undefined) {
          removeCities.push(city)
        } else {
          return
        }
      })
  })
}


