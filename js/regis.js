const submit_button = document.querySelector(".btn");
submit_button.onclick = function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    if (name == "" || email == "" || pass == "" || cpass == "") {
        alert("Harap isi semua kolom");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: pass,
        cpassword: cpass
    }

    let users = [];
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Berhasil Registrasi");
    window.location.href ="index.html";
}