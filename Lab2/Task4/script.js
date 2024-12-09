// 4. Write a script that ask the user to
//    Enter the value of a circle’s radius in order to calculate its area 
//    Enter another value to calculate its square root and alert the result  
//    Enter an angle to calculate its cos value then display the output 

    // Function to perform calculations
    function performCalculations() {

        //Step 1: Enter the value of a circle’s radius in order to calculate its area
        let radius;

        while(true)
        {
            radius = prompt("What is the value of your circle's radius?");
            if (radius.trim() === "" || isNaN(radius) || radius <= 0) {
                alert("Please enter a valid positive number for the radius.");
            }
            else{
                radius = parseFloat(radius);
                break;
            }
        }

        // Calculate the area of the circle
        let area = Math.PI * radius * radius;
        alert("Total area of the circle is " + area);
        
       //Step 2: Ask for a number to calculate its square root
    let number;

    while(true) {
        // Prompt the user for input as a string
        number = prompt("What is the value you want to calculate its square root?");
        
        // Check if the input is empty, not a valid number, or less than 0
        if (number.trim() === "" || isNaN(number) || parseFloat(number) < 0) {
            alert("Please enter a valid non-negative number for square root calculation.");
        } else {
            // Convert the input to a number once validated
            number = parseFloat(number);
            break; // Exit the loop if valid input is provided
        }
    }
    
    // Calculate the square root
    let squareRoot = Math.sqrt(number);
    
    // Show the result in an alert
    alert(`The square root of ${number} is: ${squareRoot}`);

        // Step 3: Ask for an angle to calculate its cosine value

        let angle;

        while(true) {
            // Prompt the user for input as a string
            angle = prompt("What is the value you want to calculate its cos?");
            
            // Check if the input is empty, not a valid number, or less than 0
            if (angle.trim() === "" || isNaN(angle) ) {
                        alert("Please enter a valid number for the angle.");
                } else {
                    angle = parseFloat(angle); // Convert angle to a numbe
                    break; 
            }
        }

        // Convert angle from degrees to radians
        let angleInRadians = angle * (Math.PI / 180);
        // Calculate cosine value
        let cosValue = Math.cos(angleInRadians); 

        // Round the result to a reasonable precision (e.g., 10 decimal places)
        cosValue = Math.round(cosValue * 1e10) / 1e10;

        // Check if the result is close enough to 0 and treat it as 0 if needed
        if (Math.abs(cosValue) < 1e-10) {
            cosValue = 0;
        }

        // Display the result on the web page
        document.getElementById("output").innerHTML = `<b>Cosine of ${angle} degrees:</b> ${cosValue}`;
    
    }

    // Call the function to perform the calculations
    performCalculations();