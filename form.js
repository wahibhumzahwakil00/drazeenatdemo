function whatsapp() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var clinic = document.getElementById("clinic").value;
    var date = document.getElementById("date").value;
    var timeslot = document.getElementById("timeslot").value;
    var message = document.getElementById("message").value;

    var whatsappurl = "https://wa.me/918800741590?text=" +
        "NEW APPOINTMENT!" + "%0a" +
        "Name of Patient: " + name + "%0a" +
        "Sex: " + sex + "%0a" +
        "Age: " + age + "%0a" +
        "Phone: " + phone + "%0a" +
        "Email: " + email + "%0a" +
        "Clinic: " + clinic + "%0a" +
        "Date: " + date + "%0a" +
        "Time: " + timeslot + "%0a" +
        "Message: " + message;

    window.open(whatsappurl, "_blank").focus();
}
