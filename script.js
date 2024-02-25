document.addEventListener('DOMContentLoaded', function() {
    generateRandomTip();
});

const tips = [
    "Marvincito <3",
    "Vamos de paseo π π π",
    "Are you sad? Don't be sad.",
    "Back to the future is the best movie.",
    "Back to the future II is the second best movie.",
    "-.-",
    ":v",
    "Another book suggestion: Shadows of the Mind.",
    "Another book suggestion: Outliers.",
    "Another book suggestion: Through the Glass Ceiling to the Stars.",
    "Huang says don't learn how to code.",
    ""Trust me, I'm lying."",
    "Infinito positivo no contable elevado al ..."
    
    // Add more tips as needed
];

function generateRandomTip() {
    const tipContainer = document.getElementById('tip-container');
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];

    tipContainer.innerHTML = `<p class="tip"># ${randomIndex + 1}</p><p>${randomTip}</p>`;
}
