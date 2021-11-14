function sub() {
    var one = document.querySelector("#year").value;
    var two = document.querySelector("#month").value;
    var three = document.querySelector("#date").value;
    var four = document.querySelector("#gender").value;
    var submit;


    if(four == "male") {
        submit = one + two + three;

    }
    else if(four == female) {
        submit = one + two + three;
    }



    document.querySelector("#feedback").innerHTML = submit;

};

/*var submit = document.getElementById("sub").innerHTML;
function myFunction() {
    document.getElementById("feedback").innerHTML = submit;
}*/