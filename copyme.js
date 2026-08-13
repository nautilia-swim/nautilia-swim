document.querySelectorAll('.copyme').forEach(el => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('alia-label', 'in Zwischenablage kopieren');
  btn.setAttribute('title', 'in Zwischenablage kopieren');

  btn.innerHTML = '🗐';

  btn.onclick = () => {
    navigator.clipboard.writeText(el.textContent.trim());
  };

  const parentLink = el.closest('a');
  (parentLink || el).after(btn);
});
