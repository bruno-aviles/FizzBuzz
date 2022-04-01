//Display Results to user
function displayResults(){

    //get user inputs
    let fNumber = document.getElementById("fizzNumber").value;
    let bNumber = document.getElementById("buzzNumber").value;
    
    verifyNumbers(fNumber,bNumber);
}

//Verify FIZZBUZZ
function verifyNumbers(fizz,buzz){

    let displayNumbers = document.getElementById("results");
    // store all <td> elements from for loop
    let templateRows = "";

    // loop through input numbers and add <td> element for each number
    for(number=fizz;number <= buzz;number++){
        // replace the numbers that are a multiple of 3 and 5 with "FIZZ" and "BUZZ"
        if(number % 3 == 0 && number % 5 == 0){
            templateRows += `<tr><td>FIZZBUZZ</td></tr>`;
        } else if(number % 3 == 0){
            templateRows += `<tr><td>FIZZ</td></tr>`;
        } else if(number % 5 == 0){
            templateRows += `<tr><td>BUZZ</td></tr>`;
        } else {
            templateRows += `<tr><td>${number}</td></tr>`;
        }

        // insert all stored values from templateRows to <tbody>
        displayNumbers.innerHTML = templateRows;      
    }
}
