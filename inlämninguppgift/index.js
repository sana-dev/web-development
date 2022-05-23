// Event fires when html is loaded
document.addEventListener('DOMContentLoaded', function(event) {

  //  Variables;
  let ageLimit = 18;
  let defaultPassword = "Grit";

  // Array 
  let people = [];

  // Declare form inputs and controls
  let nameInput = document.getElementById('input-text-name');
  let ageInput = document.getElementById('input-text-age');
  let passwordInput = document.getElementById('input-text-password');
  let loginButton = document.getElementById('input-button-login');
  let messageBox = document.getElementById('message-box');

  // Create variables for input values
  let name, age, password;

  // Login button click event
  loginButton.onclick = function(){

    // Clear Message Box
    messageBox.innerHTML = "";

    // set variables for inputs
    name = nameInput.value;
    age = ageInput.value;
    password = passwordInput.value;

    // Validate all inputs
    if ( validateName(name) && validateAge(age) && validatePassword(password) ){

      // Add form data to person array
     people.push([name, age]);

      // Add custom person data to array
      people.push(["Marcus", 33]);

      // Display welcome message for all persons from perons array
      people.forEach( function(value, index){

        // Array element values
        let person = value;
        let personName = person[0];
        let personAge = person[1];
        
        // Message
        let message = "Hello! " + personName + " you are "+"(" + personAge + ")" +"years old"+" Welcome Onboard.. ";
        // append welcome message to message div
        messageBox.innerHTML += "<br>" + message;
  
      });

    }

  }

  // Function to validate Name input value
  function validateName(value){

    // Error flag variable
    let error = false;

    // trim spaces from the value
    value = value.trim();

    // Check if name is not empty
    if ( value === "" ){
      error = "Please enter a name!";
    }

    // If error then append error message to the box and return false
    if ( error ){
      messageBox.innerHTML += "<br>" + error;
      return false;
    }

    // return true if no errors
    return true;

  }

  // Validate age input value
  function validateAge(value){

    // Error flat variable
    let error = false;

    // trim spaces from the value
    value = value.trim();

    // Check if age is not empty
    if ( value === "" ){
      error = "Please enter age!";
    }

    // Convert string to integer
    value = parseInt(value, 10);

    // Check if entered value is a valid number
    if ( !error && isNaN(value) ) {
      error = "Please enter a valid age!";
    }

    // chekc if age is in limit
    if ( !error && value < ageLimit ){
      error = "You must be " + ageLimit +  " years old or over, Please fill the form again!";
    }

    // If error then append error message to the box and return false
    if ( error ){
      messageBox.innerHTML += "<br>" + error;
      return false;
    }

    // return true if no errors
    return true;

  }

  // Validate password input value
  function validatePassword(value){

    // Error flag variable
    let error = false;

    // Check if the password is not empty
    if ( value === "" ){
      error = "Password is required!";
    }

    // Check if the password is correct
    if ( !error && value !== defaultPassword ){
      error = "Inalid password!";
    }

    // If error then append error message to the box and return false
    if ( error ){
      messageBox.innerHTML += "<br>" + error;
      return false;
    }

    // return true if no errors
    return true;

  }

});