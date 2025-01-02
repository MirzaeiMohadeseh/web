function validateForm(redirectUrl) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("لطفاً تمام فیلدها را پر کنید");
    } else {
        window.location.href = redirectUrl;
    }
}