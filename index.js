function incorrect(day, month) {
    if(day < 1 || day > 31 || month == 2 && day > 29) {
        alert("Invalid date");
        day.focus();
        return false;

    }else if(month < 1 || month > 12 ) {
        alert("Invalid month");
        month.focus();
        return false;
    }else{
        return true;
    }
}
//user input function
function AkanCulture() {
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if(incorrect(day, month)) {
        var dayIndex = new Date(year, month-1, day).getDay();
        alert("Your Akan Name is: " + getAkanCulture(dayIndex, gender));

    }


}

function getAkanCulture(dayIndex, gender) {
    var boyNames = ["Akwasi", "Kwadwo", "Kwabena", "Kwaku", "Yau", "Kofi", "Kwame"];
    var girlNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amaa"];
    return gender === "male" ? boyNames[dayIndex] : girlNames[dayIndex];
}