// Check the Password Function //  exercice 1 //

// get password Elements
// const userPassword = document.getElementById('pass')
// const userPasswordRepeat = document.getElementById('c_pass')

// document.getElementById('submitBtn').addEventListener('click', () => {
//     console.log(userPassword.value)
//     if(userPassword.value == userPasswordRepeat.value){
//         userPassword.style.borderColor = 'green';
//         userPasswordRepeat.style.borderColor = 'green';
//     } else {
//         userPassword.style.borderColor = 'red';
//         userPasswordRepeat.style.borderColor = 'red';
//     }
// })

// Check the Password Functions //  exercice 2 //

// get password Html Elements
const userPassword = document.getElementById('pass')
const userPasswordRepeat = document.getElementById('c_pass')

// function block to make #submitBtn return color-feedback when it checks btw the 2 passwords
document.getElementById('submitBtn').addEventListener('click', () => {
    if(userPassword.value == userPasswordRepeat.value && userPassword.value != ""){
        userPassword.classList.remove('redBorder')   // added to avoid 1 password change to change only one box color..
        userPasswordRepeat.classList.remove('redBorder')    // ..because of class conflict
        userPassword.classList.add('greenBorder')
        userPasswordRepeat.classList.add('greenBorder')
    } else {
        userPassword.classList.remove('greenBorder')  // same
        userPasswordRepeat.classList.remove('greenBorder')  // same
        userPassword.classList.add('redBorder')  
        userPasswordRepeat.classList.add('redBorder')
    }

})

// Reset border-color of password boxes  ( after a first #submitBtn click)
    //  only because #submitBtn goes no where ( dont refresh page )

document.getElementById('pass').addEventListener('click', () => {
    userPassword.classList.remove('greenBorder')
    userPassword.classList.remove('redBorder')
    userPassword.value = "" // added to reset the password box value when clicked
} )

document.getElementById('c_pass').addEventListener('click', () => {
    userPasswordRepeat.classList.remove('greenBorder')
    userPasswordRepeat.classList.remove('redBorder')
    userPasswordRepeat.value = ""    // added to reset the password box value when clicked
} )

