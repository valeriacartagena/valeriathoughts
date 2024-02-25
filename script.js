const tips = [
    "I love Marvincito <3",
    "Vamos de paseo π π π"
    "Are you sad? Don't be sad"
    "Back to the future is the best movie",
    "Back to the future II is the second best movie",
    // Add more tips as needed
];

function generateRandomTip() {
    const tipContainer = document.getElementById('tip-container');
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];

    tipContainer.innerHTML = `<p class="tip"># ${randomIndex + 1}</p><p>${randomTip}</p>`;
}

// Call the function on page load
generateRandomTip();
