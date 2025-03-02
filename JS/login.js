import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");

    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Đăng nhập thành công!");
                window.location.href = "../index.html"; // Điều hướng về trang chính
            })
            .catch((error) => {
                alert("Lỗi: " + error.message);
            });
    });
});