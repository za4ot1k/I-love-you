const layer = document.getElementById('heartsLayer');

const heartImages = [
  './img/Growing Heart.png',
  './img/Two Hearts.png',
  './img/Red Heart.png',
];

const heartEmojis = ['💜','💕','💗','💖','🩷','❤️','💝'];

function createHeart() {
  if (layer.children.length > 10) layer.removeChild(layer.children[0]);
  
  const el = document.createElement('div');
  el.className = 'heart';

  if (heartImages.length > 0) {
    const img = document.createElement('img');
    img.src = heartImages[Math.random() * heartImages.length | 0];
    img.style.width  = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    el.appendChild(img);
  } else {
    el.textContent = heartEmojis[Math.random() * heartEmojis.length | 0];
  }

  const size = (20 + Math.random() * 30).toFixed(0) + 'px';
  el.style.width  = size;
  el.style.height = size;
  el.style.left   = (Math.random() * 100).toFixed(1) + '%';
  el.style.setProperty('--dur',   (10 + Math.random() * 8).toFixed(1) + 's');
  el.style.setProperty('--delay', (Math.random() * 5).toFixed(1) + 's');

  layer.appendChild(el);
  el.addEventListener('animationend', () => el.remove(), { once: true });
}

for (let i = 0; i < 18; i++) createHeart();
setInterval(createHeart, 2000);

// ✅ глобальна навігація — додай це
function goTo(n) {
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
  document.getElementById('slide' + n).classList.add('active');
}