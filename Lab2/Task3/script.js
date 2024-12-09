// 3. Fill an array (5 numerical values) from the user,  
//    Sort it in descending  and ascending orders 
//     then display the output as shown in Fig.
//     output:
// 	Sorting
// 	------------------------
//  u've entered the values of 5,7,1,9,4
// 	ur values after being stored descending 9,7,5,4,1
// 	ur values after being stored ascending 1,4,5,7,9


function sortArray() {
    let arr = [];

    for (let i = 0; i < 5; i++) {
        let value;
        // Keep asking until the user enters a valid number consisting only of digits
        do {
        value = prompt(`Enter value ${i + 1} :`);
    

          // Check if the entered value is a valid number (not NaN) and consists of only digits
        if (value.trim() === "" || isNaN(value) || !/^\d+$/.test(value)) {
            alert("Please enter a valid number.");
        }
        } while (value.trim() === "" || isNaN(value) || !/^\d+$/.test(value));
    
        arr.push(parseInt(value));
    }

console.log("You've entered the values of " + arr.join(", "));

let descending = [...arr].sort((a, b) => b - a);
console.log("Your values after being stored descending " + descending.join(", "));

let ascending = [...arr].sort((a, b) => a - b);
console.log("Your values after being stored ascending " + ascending.join(", "));
}

sortArray();
