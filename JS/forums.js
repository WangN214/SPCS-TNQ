import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

document.getElementById("postBtn").addEventListener("click", async () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        await addDoc(collection(db, "posts"), { title, content });
        location.reload();
    }
});

async function loadPosts() {
    const postsContainer = document.getElementById("posts");
    const querySnapshot = await getDocs(collection(db, "posts"));
    postsContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
        const post = doc.data();
        postsContainer.innerHTML += `<div class="post"><h3>${post.title}</h3><p>${post.content}</p></div>`;
    });
}

loadPosts();