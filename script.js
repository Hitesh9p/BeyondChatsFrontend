document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => section.classList.add("show"));

    const registrationForm = document.getElementById("registrationForm");
    const emailVerification = document.getElementById("emailVerification");
    const setupOrganisation = document.getElementById("setupOrganisation");
    const chatbotIntegration = document.getElementById("chatbotIntegration");
    const successUI = document.getElementById("successUI");

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        emailVerification.classList.remove("hidden");
    });

    emailVerification.querySelector("button").addEventListener("click", () => {
        registrationForm.classList.add("hidden");
        emailVerification.classList.add("hidden");
        setupOrganisation.classList.remove("hidden");
    });

    document.getElementById("organisationForm").addEventListener("submit", (e) => {
        e.preventDefault();
        setupOrganisation.classList.add("hidden");
        chatbotIntegration.classList.remove("hidden");
    });

    document.getElementById("testIntegration").addEventListener("click", () => {
        chatbotIntegration.classList.add("hidden");
        successUI.classList.remove("hidden");
        launchConfetti();
    });

    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});
