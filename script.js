function beforeSubmit() {
    let datePicker = document.getElementById('date-de-la-demande');
    let hiddenDate = document.getElementById('Date_de_la_demande__');

    let formattedDate = new Date(datePicker.value).toLocaleDateString("en-US");
    hiddenDate.value = formattedDate;
}