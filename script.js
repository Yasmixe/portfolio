 for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 3 + 's';
    p.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.querySelector('.particles').appendChild(p);
  }


  const pairs = [
    ["MACHINE", "LEARNING"],
    ["COMPUTER", "VISION"],
    ["DATA", "SCIENCE"]
  ];

  const word1 = document.getElementById("word1");
  const word2 = document.getElementById("word2");

  let pairIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWords() {
    const [first, second] = pairs[pairIndex];

    const current1 = word1.textContent;
    const current2 = word2.textContent;

    // Définir le prochain état des mots
    if (!isDeleting) {
      word1.textContent = first.substring(0, charIndex + 1);
      word2.textContent = second.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex > first.length && charIndex > second.length) {
        isDeleting = true;
        setTimeout(typeWords, 1500); // Pause après écriture
        return;
      }
    } else {
      word1.textContent = current1.substring(0, current1.length - 1);
      word2.textContent = current2.substring(0, current2.length - 1);

      if (current1.length === 0 && current2.length === 0) {
        isDeleting = false;
        charIndex = 0;
        pairIndex = (pairIndex + 1) % pairs.length;
      }
    }

    setTimeout(typeWords, isDeleting ? 200 : 200); // vitesse d’écriture/suppression
  }

  // Start the effect
  word1.textContent = "";
  word2.textContent = "";
  typeWords();


const lines = document.querySelectorAll('.typing-line');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateLines();
      observer.disconnect();
    }
  });
}, {
  threshold: 0.8,
});

observer.observe(document.querySelector('.about-content'));

function animateLines() {
  let currentLine = 0;

  function typeLine() {
    const line = lines[currentLine];
    const text = line.dataset.text;
    let index = 0;
    
    line.textContent = ''; // ← CRUCIAL !
    line.style.opacity = 1;

    const interval = setInterval(() => {
      line.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        currentLine++;
        if (currentLine < lines.length) {
          setTimeout(typeLine, 500); // delay before next line
        }
      }
    }, 30); // typing speed
  }

  typeLine();
}

 function copyEmail(event) {
    event.preventDefault(); // prevent default link behavior
    const email = "yasminehanafi59@gmail.com";
    const msg = document.getElementById("copy-msg");

    navigator.clipboard.writeText(email).then(() => {
      msg.style.display = "inline-block"; // show message
      msg.classList.add("copy-message");

      // hide it after 3s
      setTimeout(() => {
        msg.style.display = "none";
      }, 3000);
    });
  }


 interact('.draggable').draggable({
    listeners: {
      move (event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    }
  });