let userPoints = 0;

function login(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform authentication (this should be done securely on the server side)
    if (username === "demo" && password === "demo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("wasteForm").style.display = "block";
        document.getElementById("rewardPoints").style.display = "block";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}


function disposeWaste() {
    const wasteType = document.getElementById("wasteType").value;
    const quantityInput = document.getElementById("quantity");
    const quantity = parseFloat(quantityInput.value);

    // Check if quantity is a valid number
    if (isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Update reward points (this can be more sophisticated in a real application)
    userPoints += quantity * 2;

    // Display reward points
    document.getElementById("points").innerText = userPoints;

    // Clear the input field after disposing waste
    quantityInput.value = "";
}


function redeemPoints() {
    // Implement redeeming points logic (e.g., show a modal, connect to a rewards system)
    alert("Points redeemed! Check your email for details.");

    // Reset reward points to 0 after redemption
    userPoints = 0;
    document.getElementById("points").innerText = userPoints;
}
