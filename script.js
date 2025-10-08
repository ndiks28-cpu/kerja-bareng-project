// JavaScript sederhana untuk interaksi
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    
    const messages = [
        "Halo! Terima kasih sudah klik!",
        "Keren! Anda sudah klik " + clickCount + " kali",
        "Anda hebat! Terus belajar!",
        "GitHub itu menyenangkan!",
        "Selamat! Anda sedang menjadi developer!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
    message.style.color = '#ffeb3b';
    
    // Animasi sederhana
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
});

// Efek ketik untuk welcome message
const welcomeText = "Ini adalah website pertama saya di GitHub";
let i = 0;
const typingEffect = setInterval(() => {
    document.querySelector('p').textContent = welcomeText.slice(0, i);
    i++;
    if (i > welcomeText.length) clearInterval(typingEffect);
}, 100);