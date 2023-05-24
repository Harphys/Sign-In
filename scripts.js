var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pswrd").value;
    if (username == "javascripts" && password == "frontend") {
        alert("Login Successfully");
        window.location = "complete.html";
        return false;
    } else {
        attempt--;
        alert("You have " + attempt  +" attempt left ;")
        window.location = "Login.html";
        if (attempt== 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").diabled = true;
            return false;
        }
    }

}