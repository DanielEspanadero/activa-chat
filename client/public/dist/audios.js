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
        imaginePlay === null || imaginePlay === void 0 ? void 0 : imaginePlay.addEventListener('click', () => {
            imagineAudio.play();
        });
        imaginePause === null || imaginePause === void 0 ? void 0 : imaginePause.addEventListener('click', () => {
            imagineAudio.pause();
        });
        dancingPlay === null || dancingPlay === void 0 ? void 0 : dancingPlay.addEventListener('click', () => {
            dancingAudio.play();
        });
        dancingPause === null || dancingPause === void 0 ? void 0 : dancingPause.addEventListener('click', () => {
            dancingAudio.pause();
        });
        nirvanaPlay === null || nirvanaPlay === void 0 ? void 0 : nirvanaPlay.addEventListener('click', () => {
            nirvanaAudio.play();
        });
        nirvanaPause.addEventListener('click', () => {
            nirvanaAudio.pause();
        });
        maybellenePlay.addEventListener('click', () => {
            maybelleneAudio.play();
        });
        maybellenePause.addEventListener('click', () => {
            maybelleneAudio.pause();
        });
    });
})();
//# sourceMappingURL=audios.js.map