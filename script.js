// Theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Email interaction
const emailBtn = document.getElementById("emailBtn");
const emailMsg = document.getElementById("emailMsg");

emailBtn.addEventListener("click", () => {
    const email = document.getElementById("emailInput").value;

    if (email.includes("@") && email.includes(".")) {
        emailMsg.textContent = "Subscribed.";
    } else {
        emailMsg.textContent = "Enter a valid email.";
    }
});

// Hover grow effect on hero images
const heroImages = document.querySelectorAll(".hero img");

heroImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.03)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});
