
// first we get each element by it's Id.It will be the reference for form,username, email ,password  
const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
// Array for person data
namearray= [];
// added the eventless error on the form on the submit event.
form.addEventListener('submit', e => {
  // we called the preventdefault method to prevent the form from submitting 
  //before the validation  
    e.preventDefault();
// creating the function for inputs. 
    validateInputs();
});
// creating a error function
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
// creating a success function 
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// we use here the .trim to remove the white spaces
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const ageValue = age.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
// validating inputs 
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(ageValue === '') {
        setError(age, 'Age is required');
    }
    else if (ageValue<18) {
        setError(age, 'You are Under 18');
    }
    else {
        setSuccess(age);

    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue != 'Grit' ) {
        setError(password, 'Your Password is incorrect')
    } else {
        setSuccess(password);
    }
// checking the above password.
    if(cpasswordValue === '') {
        setError(cpassword, 'Please confirm your password');
    } else if (cpasswordValue !== passwordValue) {
        setError(cpassword, "Passwords doesn't match");
    } else {
        setSuccess(cpassword);
    }
// creating an array. 
    namearray.push(`${username.value } ${ageValue} `);
    console.log(namearray);

    // creating a welcome message for each of the inputs. 
    namearray.forEach(function(value, index, namearray){
        if(namearray.length>=1){
            if(ageValue>=18){
                document.getElementById("welcomeScenes").innerHTML = `Hey, ${value }.`;
                document.getElementById("WelcomeScenes1").innerHTML =` Your age is legal. Welcome to our Community. You are at number ${index +1} in the list`;
            }
            else{
                document.getElementById("welcomeScenes").innerHTML = `Hey, ${value }.`;
                document.getElementById("WelcomeScenes1").innerHTML =`Your age is not legal you have to submit the form again. `;
            }
           
        }
    }
    );


};