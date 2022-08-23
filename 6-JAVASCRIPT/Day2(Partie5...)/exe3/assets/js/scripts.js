const pStyle = document.getElementById('form').children

const form = document.getElementById('form')

// ON CHANGE - TEST VALUES with TestRegexp
form[0].addEventListener('change', () => { 
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g  //name
    if(regex.test(form[0].value)){
        form[0].style.borderColor = 'green'
        pStyle[2].classList.remove('notHidden')
    } else {
        form[0].style.borderColor = 'red'
        pStyle[2].classList.add('notHidden')
    }
})
form[1].addEventListener('change', () => {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g  //email
    if(regex.test(form[1].value)){
        form[1].style.borderColor = 'green'
        pStyle[5].classList.remove('notHidden')
    } else {
        form[1].style.borderColor = 'red'
        pStyle[5].classList.add('notHidden')
    }
})
form[2].addEventListener('change', () => {
    const regex = /^\d+$/g  //number
    if(regex.test(form[2].value)){
        form[2].style.borderColor = 'green'
        pStyle[8].classList.remove('notHidden')
    } else {
        form[2].style.borderColor = 'red'
        pStyle[8].classList.add('notHidden')
    }
})
// RESET BORDER COLOR ONCLICK
form[0].addEventListener('click', () => { form[0].style.borderColor = 'transparent' })
form[1].addEventListener('click', () => { form[1].style.borderColor = 'transparent' })
form[2].addEventListener('click', () => { form[2].style.borderColor = 'transparent' })











// let i 
// for(i=0; i<3; i++){
//     form[i].addEventListener('click', () => {
//         if(form[i])
//     })
// }


// REGEX TEST TEMPLATE

// var isValid = true;
// try {
//     new RegExp("the_regex_to_test_goes_here");
// } catch(e) {
//     isValid = false;
// }

// if(!isValid) alert("Invalid regular expression");


// const input = document.querySelector( 'input' );
// const msg   = document.querySelector( '.msg' );
// const regex = /^\d+(-\d+)?(,\d+(-\d+)?)*$/;

// input.addEventListener( 'keyup', function ( e ) {
//   const str = regex.test( this.value ) ? 'Match!' : 'No Match';
//   msg.textContent = str;
// } );

// <input type="text" name="numbers">
// <div class="msg"></div>