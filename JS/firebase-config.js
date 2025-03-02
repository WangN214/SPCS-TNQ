// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBz2Vxluq4j-_5xmYWcaDz9xuwHMlNlcm8",
    authDomain: "spck-trieunhatquang.firebaseapp.com",
    projectId: "spck-trieunhatquang",
    storageBucket: "spck-trieunhatquang.firebasestorage.app",
    messagingSenderId: "296656554691",
    appId: "1:296656554691:web:ec4a88fdb8858f52eaf076",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, db }

// Kiểm tra trạng thái đăng nhập
export function checkAuth(callback) {
    onAuthStateChanged(auth, callback);
}
