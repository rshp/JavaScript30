window.addEventListener('keydown',logevent);
const keyList =  Array.from(document.getElementsByClassName('key'));

keyList.forEach(element => {
    element.addEventListener('transitionend',classToggle);
});

function classToggle(e) {
    console.log(e);
    e.target.classList.remove ('playing');
};

function logevent (evnt){
    let key = evnt.keyCode;
    
    audioObj = document.querySelector(`audio[data-key="${key}"]`);
    divObj = document.querySelector(`div[data-key="${key}"]`);
    if (!audioObj) {return};
    
    audioObj.currentTime = 0;
    audioObj.play();
    divObj.classList.add('playing');
}