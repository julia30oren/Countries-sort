// iterate over array:
// foreach, for
const countriesNames = [];
countries.forEach((country) => {
    if (name === "Israel") countriesNames.push({ countryName: name, population })
})
let sum = 0;
countries.forEach((country) => {
    sum += country.population
})

// console.log(countriesNames)
// console.log(sum)


//map 
const newCountries = countries.map((country, index) => {
    const { name, population, flag, borders } = country;
    // if (name === "Israel") return { countryName: name, population }
    const newPopulation = `The number is:${population}`
    return { name, population: newPopulation, flag, borders: borders.join(" ") }
})


// console.log(newCountries)


//filter

// const filteredCountries = countries.filter(country => {
//     const { borders } = country;
//     return !borders.length
// })

const hasBordersNames = countries
    .filter(country => country.borders.length)
    .map(country => country.name)


// console.log(hasBordersOnlyNames)

//find 
// return exactly 1 item according to the boolean result
// const item = hasBordersOnlyNames.find((countryName) => { return countryName === "Israel" })
// const item2 = hasBordersOnlyNames.find((countryName) => { return countryName === "USA" })

// console.log(item, "found!!!")

const getNames = (country) => {
    return country.borders.map(border => {
        const foundCountry = countries.find((country) => country.alpha3Code === border)
        return foundCountry.name
    })
}

const result2 = countries.
    filter(country => country.borders.length)
    .map(country => {
        const namesOfBorders = getNames(country);
        return { name: country.name, borders: namesOfBorders }
    })


// console.log(result2)