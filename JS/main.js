

window.onload = function() {

    document.querySelector(".opening").onclick = function(){
    document.querySelector(".opening").style.display = 'none';
    document.querySelector(".game-container").style.display= 'block';

    Game.init();
  }
  
};
