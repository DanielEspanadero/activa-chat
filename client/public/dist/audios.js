"use strict";
(() => {
    window.addEventListener('load', () => {
        // Import buttons to play and pause the audios
        const imaginePlay = document.querySelector('#imagine-play');
        const imaginePause = document.querySelector('#imagine-pause');
        const dancingPlay = document.querySelector('#dancing-play');
        const dancingPause = document.querySelector('#dancing-pause');
        const nirvanaPlay = document.querySelector('#nirvana-play');
        const nirvanaPause = document.querySelector('#nirvana-pause');
        const maybellenePlay = document.querySelector('#maybellene-play');
        const maybellenePause = document.querySelector('#maybellene-pause');
        // Import audio
        const imagineAudio = new Audio('../assets/sound/imagine.mp3');
        const dancingAudio = new Audio('../assets/sound/dancing-queen.mp3');
        const nirvanaAudio = new Audio('../assets/sound/nirvana.mp3');
        const maybelleneAudio = new Audio('../assets/sound/maybellene.mp3');
        // Create events when buttons are clicked.
        imaginePlay.addEventListener('click', () => {
            imagineAudio.play();
            dancingAudio.pause();
            nirvanaAudio.pause();
            maybelleneAudio.pause();
        });
        imaginePause.addEventListener('click', () => {
            imagineAudio.pause();
        });
        dancingPlay.addEventListener('click', () => {
            dancingAudio.play();
            imagineAudio.pause();
            nirvanaAudio.pause();
            maybelleneAudio.pause();
        });
        dancingPause.addEventListener('click', () => {
            dancingAudio.pause();
        });
        nirvanaPlay.addEventListener('click', () => {
            nirvanaAudio.play();
            imagineAudio.pause();
            dancingAudio.pause();
            maybelleneAudio.pause();
        });
        nirvanaPause.addEventListener('click', () => {
            nirvanaAudio.pause();
        });
        maybellenePlay.addEventListener('click', () => {
            maybelleneAudio.play();
            imagineAudio.pause();
            dancingAudio.pause();
            nirvanaAudio.pause();
        });
        maybellenePause.addEventListener('click', () => {
            maybelleneAudio.pause();
        });
    });
})();
//# sourceMappingURL=audios.js.map