console.log('connecté !');
//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md
// Exercice III

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// III.1 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countriesCopy = [...countries]
console.log(countriesCopy)

const sortedCountries = countriesCopy.reverse()
console.log(sortedCountries)

// III.2 Extract all the countries contain the word 'land' from the countries array and print it as array
let land = []
for(let country of countries){
  if(country.includes('land')){
    land.push(country)
  }
}
console.log(land)

// III.3 Find the country containing the highest number of characters in the countries array
let highest =''
countries.forEach((item)=>{
  if(item.length > highest.length){
    highest = item
  }
})
console.log(highest)

// III.4 Extract all the countries containing only four characters from the countries array and print it as array
let fourChar=[]
countries.forEach((item)=>{
  if(item.length == 5){
    fourChar.push(item)
  }
})
console.log(fourChar)

// III.5 Extract all the countries containing 7 or more letters from the countries array and print it as array

const five = countries.filter((country)=>{
  if(country.length >= 7){
    return country
  }
})
console.log(five)

// III.6 Reverse the countries array and capitalize each country and stored it as an array

countries.reverse()
const capitalizedCountries = countries.map((country=>{
  return country.toUpperCase()
}))

console.log(capitalizedCountries)