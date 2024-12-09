// 1.  Write a script that reads from the user his info; 
// validates and  displays it with a welcoming message in console.
// Name: should be character not a number
// Phone Number: should be numbers with length = 8  
// Mobile Number: should be numbers with length = 11 
// 	     and starts with (010|011|012) (use RegExp)
// Email: should use regular exp
// 	To validate that the email is formatted correctly.
//         (abc@123.com)(use RegExp)
// Use coloring format according to user’s choice. The user has to choose
// either red, green or blue color, take his choice via prompt “BONUS”


// Function to validate name 
function validateName() {
    let name;
    while (true) {
        name = prompt("Please enter your name:");

        // Check if name is not empty and contains only letters (simple check)
        // ^ match the start is string or space , $ match the end is string or space 
        // [A-Za-z\s]  Matches a single character that is Any uppercase letter or lowercase letter
        // +  Ensures one or more of the above characters are present

        if (name && /^[A-Za-z\s]+$/.test(name)) {
            break; // Valid name, exit the loop
        } else {
            alert("Invalid name. Please enter a valid name containing only letters.");
        }
    }
    return name;
}

// Function to validate phoneNumber
function validatePhoneNumber() {
    let phoneNumber;
    while (true) {
        phoneNumber = prompt("Please enter your phone number ");

        // Check if phoneNumber is numbers with length = 8 
        // \\d: Matches a single digit (equivalent to [0-9]).
        // {8}: Specifies exactly 8 digits.

        if (/^\d{8}$/.test(phoneNumber)) {
            break; 
        } else {
            alert("Invalid phone number. Please enter a valid number with exactly 8 digits.");
        }
    }
    return phoneNumber;
}

// Function to validate mobileNumber
function validateMobileNumber() {
    let mobileNumber;
    while (true) {
        mobileNumber= prompt("Please enter your mobile Number ");

        // Check if phoneNumber is numbers with length = 11 and starts with (010|011|012)

        if (/^(010|011|012)\d{8}$/.test(mobileNumber)) {
            break; 
        } else {
            alert("Invalid mobileNumber. Please enter a valid number with exactly 11 numbers starting with 010, 011 or 012.");
        }
    }
    return mobileNumber;
}

// Function to validate email
function validateEmail() {
    let email;
    while (true) {
        email= prompt("Please enter your email");

        // formatted correctly(abc@123.com)
        // ^[a-zA-Z0-9]: The username must start with an alphanumeric character.
        // (?!.*\\.\\.): Disallows consecutive dots anywhere in the string.
        // ([a-zA-Z0-9._%+-]*[a-zA-Z0-9])?: Ensures the username ends with a valid character (not a dot or special character).
        // @[a-zA-Z0-9-]+: Matches the domain name portion (alphanumeric characters and hyphens allowed).
        // (\\.[a-zA-Z0-9-]+)*: Matches additional subdomains separated by dots (but ensures no consecutive dots).
        // \\.[a-zA-Z]{2,}$: Matches the TLD with at least 2 characters and ensures the string ends properly.

        if (/^[a-zA-Z0-9](?!.*\\.\\.)([a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/.test(email)) {
            break; 
        } else {
            alert("Invalid email. Please enter a valid email with formatting correctly(abc@123.com).");
        }
    }
    return email;
}

// validateName();
// validatePhoneNumber();
// validateMobileNumber();
// validateEmail();

document.addEventListener("DOMContentLoaded", function() {
    function colorChoice() {
        let color;
        while (true) {
            color = prompt("Choose a color for the welcome message (red, green, or blue):").toLowerCase();

            if (["red", "green", "blue"].includes(color)) {
                break;
            } else {
                alert("Invalid color choice. Please choose red, green, or blue.");
            }
        }
        return color;
    }

    
    let name = validateName();
    let phoneNumber = validatePhoneNumber();
    let mobileNumber = validateMobileNumber();
    let email =  validateEmail();
    const chosenColor = colorChoice();

    const container = document.createElement("div");

    document.body.appendChild(container);
    
    container.innerHTML += `<p><span class="${chosenColor}">Welcome dear guest</span> <span class="name">${name}</span></p>`;
    container.innerHTML += `<p><span class="${chosenColor}">your telephone number ist</span> <span class="name">${phoneNumber}</span></p>`;
    container.innerHTML += `<p><span class="${chosenColor}">your mobile number is</span> <span class="name">${mobileNumber}</span></p>`;
    container.innerHTML += `<p><span class="${chosenColor}">your email assress is </span> <span class="name">${email}</span></p>`;

    console.log(
        `%cWelcome dear guest %c${name}
    %cYour phone number is: %c${phoneNumber}
    %cYour mobile number is: %c${mobileNumber}
    %cYour email address is: %c${email}`,
        `color:${chosenColor}; font-weight:bold;`, "color:white;",
        `color:${chosenColor}; font-weight:bold;`, "color:white;",
        `color:${chosenColor}; font-weight:bold;`, "color:white;",
        `color:${chosenColor}; font-weight:bold;`, "color:white;"
    );
});

// rana
// 39149022
// 01227433229
// Rana@gmail.com
// green

