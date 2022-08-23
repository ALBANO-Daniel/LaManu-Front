// exercice variation script
const gradesList = document.getElementById('gradesList')

let allGrades = 0
let numberOfGrades = 0

document.getElementById('addNewGradeBtn').addEventListener('click', () => {
    const newGradeInput = document.getElementById('newGrade').value
    gradesList.innerHTML += `<p> ${newGradeInput} <button>(remove)</button><p>` 
    numberOfGrades += 1
    allGrades += Number(newGradeInput)
    document.getElementById('newGrade').value = '' 
})

document.getElementById('makeResult').addEventListener('click', () => {
    document.getElementById('result').innerHTML = allGrades / numberOfGrades
    result = allGrades / numberOfGrades
    if(result == 20){
                alert('Excellent');
            } else if(result < 20 && result >= 16){
                alert('Très bien');
            } else if(result < 16 && result >= 13){
                alert('Bien');
            } else if(result < 13 && result >= 10){
                alert('Moyen')
            } else if(result < 10 && result >= 0){
                alert('En dessous de la moyenne')
            } else {
                alert('Try again, use numbers btw 0 - 20');
            }
})


// exercice 2 official script

// // recover ARRAY of input tags   All 5 
// const gradesForm = document.getElementById('formOfGrades')

// // BTN submit
// const CalcMoyenneBtn = document.getElementById('submitCalcMoyenne')

// // the submit BTN to calc the final result
// CalcMoyenneBtn.addEventListener('click', () => {
//     let i
//     let allNotes = 0
//     // calc of the grade final result
//     for (i = 0 ; i < 5 ; i++){
//         allNotes += Number(gradesForm[i].value)
//     }
//     let gradeResult = (allNotes / 5)
//     // IF statement to determine the return value to user
//     if(gradeResult == 20){
//         alert('Excellent');
//     } else if(gradeResult < 20 && gradeResult >= 16){
//         alert('Très bien');
//     } else if(gradeResult < 16 && gradeResult >= 13){
//         alert('Bien');
//     } else if(gradeResult < 13 && gradeResult >= 10){
//         alert('Moyen')
//     } else if(gradeResult < 10 && gradeResult >= 0){
//         alert('En dessous de la moyenne')
//     } else { 
//         alert('Try again, use numbers btw 0 - 20');
//     }
// })
