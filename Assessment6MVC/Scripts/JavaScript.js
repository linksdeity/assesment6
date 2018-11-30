function Going() {
    if (document.getElementById('GoingBox').checked) {
        document.getElementById('DatePicker').classList.remove('hidden')
        document.getElementById('NotGoing').classList.add('hidden')
    } else {
        document.getElementById('DatePicker').classList.add('hidden')
        document.getElementById('NotGoing').classList.remove('hidden')
    }
}

function validateForm() {

    var email = document.getElementById('email').value;
    var emailRGEX = /\S+@\S+\.\S+/;
    var emailResult = emailRGEX.test(email);

    if (emailResult == false) {
        alert("email:" + emailResult);
        return false;
    }

    var firstnameNumber = document.getElementById('firstname').value;
    var firstnameRGEX = /^[A-Z][a-z]+$/;
    var firstnameResult = firstnameRGEX.test(firstnameNumber);
    alert("firstname:" + firstnameResult);

    if (firstnameResult == false) {
        alert("email:" + firstnameResult);
        return false;
    }

    var lastnameNumber = document.getElementById('lastname').value;
    var lastnameRGEX = /^[A-Z][a-z]+$/;
    var lastnameResult = lastnameRGEX.test(lastnameNumber);
    alert("lastname:" + lastnameResult);

    if (lastnameResult == false) {
        alert("email:" + lastnameResult);
        return false;
    }



}