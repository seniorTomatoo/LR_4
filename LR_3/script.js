function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    if (password != confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Пароли не совпадают";
        return false;
    }
    var phone = document.getElementById("phone").value;
    var phonePattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Неверный формат телефона";
        return false;
    }
}