console.log(Array.isArray(countries), countries)

const countriesObj = {};

countries.forEach((country) => {
    const { alpha3Code } = country
    countriesObj[alpha3Code] = country
})

console.log(countriesObj)
console.log(Object.keys(countriesObj).length)


// const result = countries.some((c) => c.name === "Israel")

const countriesObjReduceResult = countries.reduce((initValue, country) => {
    const { alpha3Code } = country
    initValue[alpha3Code] = country;
    return initValue;
}, {})

const countriesObjReduceResultV2 = countries.reduce((countriesObj, country) => {
    const { alpha3Code, name, population } = country
    //alpha3Code USA/ISR/GER...
    // const a = countriesObj
    // a.ISR = 1
    // countriesObj.ISR ? // 1 
    return { ...countriesObj, [alpha3Code]: { name, population } }
}, {})


const countriesNamesWithCur = countries.reduce((nameWithCur, country) => {
    const { name, currencies } = country
    nameWithCur[name] = currencies;
    return nameWithCur;
}, {})


console.log(countriesObjReduceResultV2, "countriesObjReduceResultV2")