document.addEventListener("DOMContentLoaded", function () {

    console.log("JS conectado ✅");

    // MODAL
    let botones = document.querySelectorAll(".btn-modal");

    botones.forEach((boton, index) => {
        boton.addEventListener("click", function () {

            let modalText = document.getElementById("modalText");
            modalText.innerHTML = "Has hecho clic en el producto " + (index + 1);

            let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
        });
    });

    // LOGIN
    let form = document.getElementById("LoginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("exampleInputEmail1").value;
        let password = document.getElementById("password").value;
        let message = document.getElementById("message");

        const USER_DEFAULT = "prueba@gmail.com";
        const PASSWORD_DEFAULT = "123456";

        if (email === "" || password === "") {
            message.innerHTML = "Todos los campos son obligatorios!";
            message.className = "text-warning";

        } else if (email === USER_DEFAULT && password === PASSWORD_DEFAULT) {
            message.innerHTML = "Bienvenido al sistema";
            message.className = "text-success";

        } else {
            message.innerHTML = "Error: Usuario o contraseña inválidos";
            message.className = "text-danger";
        }
    });

});