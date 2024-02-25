const tips = [
    "Tip content 1",
    "Tip content 2",
    "Tip content 3",
    // Add more tips as needed
];

function generateRandomTip() {
    const tipContainer = document.getElementById('tip-container');
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];

    tipContainer.innerHTML = `<p class="tip"># ${randomIndex + 1}</p><p>${randomTip}</p>`;
}
