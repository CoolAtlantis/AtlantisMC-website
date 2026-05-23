const coolMusic = document.getElementById('music');
const soundButton = document.getElementById('sound-button')
const volumeSlider = document.getElementById('volume-slider')
let coolMusicPlaying = false;
soundButton.addEventListener('click', () => {
    if (coolMusicPlaying) {
        coolMusic.pause();
        soundButton.textContent = 'Play Music';
        volumeSlider.classList.remove('visible')
    } else {
        coolMusic.play();
        soundButton.textContent = 'Stop Music';
        volumeSlider.classList.add('visible');
    }
    coolMusicPlaying = !coolMusicPlaying;
});

volumeSlider.addEventListener('input', () => { 
    coolMusic.volume = volumeSlider.value;
});