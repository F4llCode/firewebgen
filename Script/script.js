// script.js

function goHome() {
    console.log("Go Home button clicked!");
}

function generateServiceUI(serviceName, serviceIcon) {
    // Display the generated service UI
    var generatedService = document.getElementById("generatedService");
    var generatedServiceIcon = document.getElementById("generatedServiceIcon");
    var generatedServiceName = document.getElementById("generatedServiceName");

    generatedServiceIcon.src = serviceIcon;
    generatedServiceName.textContent = serviceName;
    generatedService.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".container");
    container.style.opacity = "1";
});

// Simulating the generation of a service (Netflix)
function generateAccounts() {
    // Replace this with actual data from your server or wherever you get the service information
    var serviceName = "Netflix";
    var serviceIcon = "netflix-logo-transparent-free-png.png";

    // Call the function to generate and display the service UI
    generateServiceUI(serviceName, serviceIcon);
}
