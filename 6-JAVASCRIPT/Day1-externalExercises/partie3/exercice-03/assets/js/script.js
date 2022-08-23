let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let count = 0
// console.log(languages[9])
do{
    // document.body.innerHTML += languages[count]
    document.write(` ${languages[count]} |`)
    count++
} while (languages[count] !== undefined)

//  USE THE ARRAY METHODS INSTEAD for more precision! and less bug..
// as
// a value can be undefined for a reason ...



