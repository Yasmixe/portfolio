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
      lines.forEach((line, i) => {
        const text = line.dataset.text;
        const delay = i * 2500;

        setTimeout(() => {
          line.textContent = text;
          line.style.animation = `typing 2s steps(${text.length}, end) forwards, blinking 1s step-end infinite`;
        }, delay);
      });

      observer.disconnect(); // empêche que ça se relance à chaque scroll
    }
  });
}, {
  threshold: 0.8,
});

observer.observe(document.querySelector('.about-text'));

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