function starString(x){
    if (typeof x === 'number' && x > 0){
        var finalString = '';
        //iterate appending * for each iteration
        for(var i =0; i<x; i++){
        finalString = finalString + "*";
        }
        return finalString;
    }else return "not a positive number";
}

function drawStars(x){
    if (Array.isArray(x)==true){
        var arrayValue = '';
        // find the value of the array I'm at
        for(var i = 0; i<x.length; i++){
            arrayValue = x[i];
            // if array value is a number use starString to log the number of stars
            if (typeof arrayValue === 'number'){
            console.log(starString(arrayValue));
            }
            // if array value is a string use sub string to get the first letter of the string
                else if (typeof arrayValue === 'string'){
                    var stringOutput = '';
                    for(var k = 0; k<arrayValue.length; k++){
                    stringOutput += arrayValue.substring(0,1).toLowerCase();
                }console.log(stringOutput);
            }
        }  
        
    }      
}





let stars = starString(8);
console.log(stars);

let k = drawStars([4, 6, 1, 3, 5, 7, 25]);
//console.log(k);

let x = drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);