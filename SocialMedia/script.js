function createPost() {

    const input = document.getElementById("postInput");

    const text = input.value.trim();

    if (text === "") {
        alert("Write something first!");
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <div class="post-header">
            <img src="https://i.pravatar.cc/60?img=5">

            <div>
                <h3>You</h3>
                <small>Just now</small>
            </div>
        </div>

        <p>${text}</p>

        <div class="actions">
            <button onclick="likePost(this)">
                ❤️ <span>0</span>
            </button>

            <button onclick="commentPost()">
                💬 Comment
            </button>

            <button onclick="sharePost()">
                ↗ Share
            </button>

            <button onclick="deletePost(this)">
                🗑 Delete
            </button>
        </div>
    `;

    document.getElementById("posts").prepend(post);

    input.value = "";

}

function likePost(button){

    let count = button.querySelector("span");

    let likes = Number(count.innerText);

    likes++;

    count.innerText = likes;

}

function commentPost(){

    let comment = prompt("Enter your comment:");

    if(comment && comment.trim() !== ""){

        alert("Comment Added:\n\n" + comment);

    }

}

function sharePost(){

    alert("Post Shared!");

}

function deletePost(button){

    if(confirm("Delete this post?")){

        button.closest(".post").remove();

    }

}