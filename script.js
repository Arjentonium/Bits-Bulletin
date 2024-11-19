document.addEventListener("DOMContentLoaded", () => {
    const googleLoginBtn = document.getElementById("google-login-btn");
    const categoryForm = document.getElementById("category-form");
    const scheduleContainer = document.getElementById("schedule-container");

    // Simulate Google Login (to be replaced with actual integration)
    googleLoginBtn.addEventListener("click", () => {
        alert("Google Login Clicked! Integrate OAuth here.");
    });

    // Handle Category Form Submission
    categoryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedCategories = Array.from(
            document.querySelectorAll("input[name='category']:checked")
        ).map((checkbox) => checkbox.value);

        if (selectedCategories.length > 0) {
            alert(`Preferences Saved: ${selectedCategories.join(", ")}`);
            loadSchedule(selectedCategories);
        } else {
            alert("Please select at least one category.");
        }
    });

    // Function to Load Schedule (Dynamic Data Placeholder)
    function loadSchedule(categories) {
        scheduleContainer.innerHTML = `
            <h3>Upcoming Events</h3>
            <ul>
                ${categories
                    .map((category) => `<li>${category}: No events found yet.</li>`)
                    .join("")}
            </ul>
        `;
    }
});
