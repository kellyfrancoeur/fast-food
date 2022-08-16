//use if/else statements to iterate through array
//use .push to console.log finished food with new string


const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
	/*
		Write your if/else code here. In each block use .push() to insert
		the correct string into the finishedFood array.
	*/
    if (ingredient === "beef patty") {
        finishedFood.push("burger")
    }
    else if (ingredient === "egg"){
        finishedFood.push("buscuit")
    }
    else if (ingredient === "potato"){
        finishedFood.push("fries")
    }
}

console.log(finishedFood)