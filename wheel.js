const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const sections = [
    "Panties", "Custom Video", "Cock-sucking", 
    "Anal", "Video Dick Rate", "Masturbating Show",
    "Sexy Strip", "Live Show"
];

const numSections = sections.length;
const anglePerSection = (2 * Math.PI) / numSections;
let currentAngle = 0;
let spinning = false;

function drawWheel() {
    for (let i = 0; i < numSections; i++) {
        const startAngle = i * anglePerSection;
        const endAngle = (i + 1) * anglePerSection;

        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, startAngle, endAngle);
        ctx.fillStyle = i % 2 === 0 ? "#f39c12" : "#e74c3c";
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(startAngle + anglePerSection / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "white";
        ctx.font = "14px Arial";
        ctx.fillText(sections[i], 140, 0);
        ctx.restore();
    }
}

function spinWheel() {
    if (spinning) return;
    spinning = true;
    let spinDuration = Math.random() * 3000 + 2000;
    let spinSpeed = Math.random() * 0.1 + 0.05;

    const spin = setInterval(() => {
        currentAngle += spinSpeed;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(currentAngle);
        ctx.translate(-150, -150);
        drawWheel();
        ctx.restore();
    }, 20);

    setTimeout(() => {
        clearInterval(spin);
        const selectedIndex = Math.floor((currentAngle / anglePerSection) % numSections);
        alert(`Congratulations! You won: ${sections[selectedIndex]}`);
        spinning = false;
    }, spinDuration);
}

document.getElementById("spinButton").addEventListener("click", spinWheel);
drawWheel();
