var dob = document.querySelector("#dob");
var luckyNumber = document.querySelector("#luckyNumber");
var btn = document.querySelector("#check");
var result = document.querySelector("#result");
var error = document.querySelector("#error");

btn.addEventListener("click", function check() {

    var date = dob.value;
    if (date.length === 0 || luckyNumber.value.length === 0){
        result.innerText = "";
        error.innerText = "Please enter Date and Lucky Number";
    }
    else {
        error.innerText = "";
        date = date.replaceAll("-", "");
        var sum = date.split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0);

        if (sum % luckyNumber.value === 0) {
            result.innerText = luckyNumber.value + " is a Lucky Number 🎉🥳"
        }
        else {
            result.innerText = luckyNumber.value + " is not a Lucky Number 🙁"
        }
    }

})