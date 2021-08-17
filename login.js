// login to bank
document.getElementById('log-in').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'abc@gmail.com' && userPassword == '1234') {
        window.location.href = 'bank.html';
    }
})

