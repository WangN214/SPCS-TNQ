import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signup-btn");

    signupBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Đăng ký thành công!");
                window.location.href = "login.html";
            })
            .catch((error) => {
                alert("Lỗi: " + error.message);
            });
    });
});