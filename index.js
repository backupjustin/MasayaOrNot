const noButton = document.getElementById('noButton');
const yesbutton = document.getElementById('yesButton');
const content = document.getElementById('content');

function nour(){
  const x = Math.random() * (window.innerWidth - noButton.clientWidth);
  const y = Math.random() * (window.innerHeight - noButton.clientHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

yesbutton.addEventListener('click', ()=> {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        yesbutton.textContent = 'Yes';
        container.style.display = 'none';
      } else {
        content.style.display = 'none';
        yesbutton.textContent = 'Yes';
      }
});

noButton.addEventListener('click', nour);
noButton.addEventListener('mouseover', nour);