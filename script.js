
// Event listener for keyboard input
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
    audio.currentTime = 0 // rewind to the start
    key.classList.add('playing')
  });

//  Event listener for click/touch input
document.getElementById("a").addEventListener("click", function(){
  click(65)
});

document.getElementById("s").addEventListener("click", function(){
  click(83)
});

document.getElementById("d").addEventListener("click", function(){
  click(68)
});

document.getElementById("f").addEventListener("click", function(){
  click(70)
});

document.getElementById("g").addEventListener("click", function(){
  click(71)
});

document.getElementById("h").addEventListener("click", function(){
  click(72)
});

document.getElementById("j").addEventListener("click", function(){
  click(74)
});

document.getElementById("k").addEventListener("click", function(){
  click(75)
});

document.getElementById("l").addEventListener("click", function(){
  click(76)
});


function click(clicked){
    const audio = document.querySelector(`audio[data-key="${clicked}"]`);
    const key = document.querySelector(`.key[data-key="${clicked}"]`);
    audio.play();
    audio.currentTime = 0 // rewind to the start
    key.classList.add('playing')
};


function removeTransition(e) {
if(e.propertyName != 'transform') return;
this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
