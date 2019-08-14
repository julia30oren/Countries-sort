$(function(){


//{region: [c1,c2,c3...]}
const regions = countries.reduce((regionsObj, country)=>{
    const {region} = country;
    console.log(region);
    //regionsObj[region] = [country]

    const oldRegions = regionsObj[region] || []
    return {...regionsObj, [region]:[...oldRegions,country]}
},{})
// console.log(regions)

const rArray = Object.keys(regions);

$("#ddl_regoions").html(getRegionsOptions(rArray));
$("#ddl_regoions").on("change",function(){
    //console.log(this);
    // console.log(this.value);
    const countriesRegionArray = regions[this.value];
    console.log("countriesRegionArray",countriesRegionArray);
    $("#ddl_countries").html(getCountriesOptions(countriesRegionArray))

    })

})

function getCountriesOptions(countriesRegionArray){
    return countriesRegionArray.
    map(country =>`<option value="${country.name}"> ${country.name} </option>`)

}

function getRegionsOptions(regionsArray){
    //console.log(regionsArray);
    return regionsArray.filter((region) => region).map(region =>`<option value="${region}"> ${region} </option>`)
    // return "<option>1</option>"
}