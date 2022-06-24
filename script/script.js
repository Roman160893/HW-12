//функція по натисканню клавіш
function playSoundKeyboard(e) {
   let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
   let key = document.querySelector(`.key[data-key='${e.keyCode}']`)
   if (!audio) return;
   audio.currentTime = 0;
   key.classList.add('active');
   audio.addEventListener('ended', () => {
      key.classList.remove('active');
   })
   let keys = document.querySelectorAll('.key');
   keys.forEach(key => {
      let remove = document.getElementById(key.dataset.key)
      if (audio.id !== remove.id) {
         remove.pause()
         key.classList.remove('active')
      }
   })
   audio.play();
}
document.addEventListener('keydown', playSoundKeyboard)


// Функція по кліку мишки
let classKey = document.querySelectorAll('.key');
classKey.forEach(key => {
   key.addEventListener('click', playSoundClick)
})
function playSoundClick(e) {
   let targetKey = e.target;
   targetKey.classList.add('active');
   e.stopPropagation();
   let audio = document.getElementById(targetKey.dataset.key)
   audio.addEventListener('ended', () => {
      targetKey.classList.remove('active');
   })
   let classKey = document.querySelectorAll('.key, kbd');
   console.log(targetKey)
   classKey.forEach(key => {
      let remove = document.getElementById(key.dataset.key)
      if (audio.id !== remove.id) {
         remove.pause()
         key.classList.remove('active')
      }
   })
   audio.currentTime = 0;
   audio.play()
}