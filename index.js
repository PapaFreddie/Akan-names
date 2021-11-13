function sub() {
    var one = parseInt(document.querySelector("#year").value );
    var two = parseInt(document.querySelector("#month").value );
    var three = parseInt(document.querySelector("#date").value );
    var four = document.querySelector("gender").value;
    var submit;


    if(four == "male") {
        submit = one + two + three;

    }
    else if(four == female) {
        submit = one + two + three;
    }



    document.querySelector("#feedback").innerHTML = submit;





}