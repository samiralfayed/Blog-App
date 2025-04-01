document.addEventListener("DOMContentLoaded", function () {
    fetchPosts(); // Load posts on dashboard
});

// Function to fetch and display blog posts
function fetchPosts() {
    fetch("http://localhost:8080/api/blogs")
        .then(response => {
            if (!response.ok) {
                throw new Error("❌ Failed to fetch posts");
            }
            return response.json();
        })
        .then(posts => {
            const container = document.getElementById("postsContainer");
            container.innerHTML = ""; // Clear container before adding new posts

            if (posts.length === 0) {
                container.innerHTML = "<p>📭 No posts available.</p>";
                return;
            }

            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <small>📂 Category: ${post.category}</small>
                    <hr>
                `;
                container.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("postsContainer").innerHTML = "<p>❌ Error loading posts!</p>";
        });
}

// Function to submit a new blog post
document.getElementById("blogForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();
    let category = document.getElementById("category").value.trim();

    // Form validation
    if (!title || !content || !category) {
        alert("⚠️ All fields are required!");
        return;
    }

    let blogData = { title, content, category };

    // Send data to backend
    fetch("http://localhost:8080/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("❌ Failed to submit blog post");
            }
            return response.json();
        })
        .then(data => {
            console.log("✅ Success:", data);
            showPopup(); // Show success popup
            document.getElementById("blogForm").reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("❌ Failed to submit post!");
        });
});

// Function to show popup
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to navigate to the form page
function goToForm() {
    window.location.href = "create-post.html";
}
