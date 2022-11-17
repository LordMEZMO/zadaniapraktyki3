const array1 = ["Anna","Maria"]
const array2 = ["Tomek","Adam","Marek","Bartek"]
const numbers =[1,2,3,4,5]

const sumWithInitial = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

const array3 = array1.concat(array2);

const filterNames = (arrayname, input) => {
    return arrayname.filter(anystring => anystring.includes(input))
}

const map1 = numbers.map(x => (x * 2) + 3);

const filterArray = (array, arg) => array.filter()

function lastelement(array1)
{
    let rev = array1.reverse()
    return rev[0]
}
function concatting(arr1,arr2)
{
    let array3 = array1.concat(array2);
    return array3
}

console.log("Zadanie 1: "+concatting(array1,array2))
console.log("Zadanie 2: "+lastelement(array1))
console.log("Zadanie 3: "+filterNames(array2, "Marek")); 
console.log("Zadanie 4: "+sumWithInitial)
console.log("Zadanie 5: "+map1)