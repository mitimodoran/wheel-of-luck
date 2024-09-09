let wheel = document.querySelector('.wheel img');
let spinBtn = document.getElementById('spin-btn');
let deg = 0;

spinBtn.addEventListener('click', () => {
    // Dezactivează butonul pentru a evita multiple click-uri
    spinBtn.disabled = true;
    
    // Calculăm un grad aleatoriu pentru rotirea roții
    let newDeg = Math.floor(5000 + Math.random() * 5000);
    
    // Rotim roata
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${newDeg}deg)`;
    
    // Când animația se termină, reactivăm butonul
    wheel.addEventListener('transitionend', () => {
        spinBtn.disabled = false;
        deg = newDeg % 360;  // Stocăm rezultatul gradului final
    });
});
