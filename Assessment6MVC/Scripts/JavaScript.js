function Going() {
    if (document.getElementById('GoingBox').checked) {
        document.getElementById('DatePicker').classList.remove('hidden')
        document.getElementById('NotGoing').classList.add('hidden')
    } else {
        document.getElementById('DatePicker').classList.add('hidden')
        document.getElementById('NotGoing').classList.remove('hidden')
    }
}

function ValidateForm() {

    var email = document.getElementById('email').value;
    var emailRGEX = /[^@]+@[^\.]+\..+/;
    var emailResult = emailRGEX.test(email);

    if (emailResult === false) {
        alert("email is incorrect");
        return false;
    }

    var firstname = document.getElementById('firstname').value;
    var firstnameRGEX = /^[A-Z][a-z]+$/;
    var firstnameResult = firstnameRGEX.test(firstname);

    if (firstnameResult === false) {
        alert("firstname is incorrect!");
        return false;
    }

    var lastname = document.getElementById('lastname').value;
    var lastnameRGEX = /^[A-Z][a-z]+$/;
    var lastnameResult = lastnameRGEX.test(lastname);

    if (lastnameResult === false) {
        alert("lastname is incorrect");
        return false;
    }



}


function AlertMe() {
    alert("You are NOT going!!!");
}