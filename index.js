const elemento = document.querySelector('#input-password');

var showed = false;

function showPassword() {
    if(!showed) {
        elemento.type = "text";
        showed = true;
        return;
    } else {
        elemento.type = "password";
        showed = false;
        return;
    }
}