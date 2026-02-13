const heartsContainer = document.getElementById('hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 6) + 's';
  heart.style.opacity = Math.random();
  heart.style.transform = `scale(${0.5 + Math.random()}) rotate(45deg)`;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);



const messages = [
  "1 Corinthians 13:4 — Love is patient, love is kind.",
  "1 John 4:19 — We love because He first loved us.",
  "Song of Solomon 8:7 — Many waters cannot quench love.",
  "Proverbs 3:3 — Let love and faithfulness never leave you.",
  "Romans 12:10 — Be devoted to one another in love."
];

function showLove() {
  const msg = document.getElementById('loveMsg');
  const pick = messages[Math.floor(Math.random() * messages.length)];
  msg.style.opacity = 0;
  setTimeout(() => {
    msg.textContent = pick;
    msg.style.opacity = 1;
  }, 200);
}