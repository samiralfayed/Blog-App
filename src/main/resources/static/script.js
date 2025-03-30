document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();
    let category = document.getElementById("category").value.trim();

    // Form validation
    if (!title || !content || !category) {
        alert("All fields are required!");
        return;
    }

    let blogData = {
        title: title,
        content: content,
        category: category
    };

    // Send data to backend
    fetch("http://localhost:8080/api/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to submit blog post");
            }
            return response.json();
        })
        .then(data => {
            console.log("Success:", data);
            showPopup(); // Show success popup
            document.getElementById("blogForm").reset(); // Clear form
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to submit post!");
        });
});

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
