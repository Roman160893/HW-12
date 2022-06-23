function playSound(e) {
   let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
   let key = document.querySelector(`.key[data-key='${e.keyCode}']`)
   if (!audio) return;
   audio.currentTime = 0;
   audio.play();
   key.classList.add('active');
   audio.addEventListener('ended', () => {
      key.classList.remove('active');
   })
   console.log(audio);
}

document.addEventListener('keydown', playSound)

let key = document.querySelectorAll('.key');
key.forEach(key => {
   key.addEventListener('click', playSoundClick)
})
function playSoundClick(e) {
   let key = e.target;
   key.classList.add('active');
   let audio = document.getElementById(key.dataset.key)
   audio.addEventListener('ended', () => {
      key.classList.remove('active');
   })
   audio.currentTime = 0;
   audio.play()
}





