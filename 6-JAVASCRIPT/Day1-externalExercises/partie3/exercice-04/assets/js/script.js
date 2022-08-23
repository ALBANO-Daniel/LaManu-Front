let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'saturday','Dimanche'];

daysString = days.join(', ');

days.forEach((element, index) => {
    if(index > 4){
        document.write(`<p class="bold"> ${element}; </p>`)
    } else {
        document.write(`<p> ${element}; </p>`)
    }
}
)
