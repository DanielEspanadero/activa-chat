(() => {
    window.addEventListener('load', () => {

        // Import buttons to play and pause the audios
        const imaginePlay: HTMLButtonElement = document.querySelector('#imagine-play')!;
        const imaginePause: HTMLButtonElement = document.querySelector('#imagine-pause')!;
        const dancingPlay: HTMLButtonElement = document.querySelector('#dancing-play')!;
        const dancingPause: HTMLButtonElement = document.querySelector('#dancing-pause')!
        const nirvanaPlay: HTMLButtonElement = document.querySelector('#nirvana-play')!;
        const nirvanaPause: HTMLButtonElement = document.querySelector('#nirvana-pause')!;
        const maybellenePlay: HTMLButtonElement = document.querySelector('#maybellene-play')!;
        const maybellenePause: HTMLButtonElement = document.querySelector('#maybellene-pause')!;

        // Import audio
        const imagineAudio: HTMLAudioElement = new Audio('../assets/sound/imagine.mp3');
        const dancingAudio: HTMLAudioElement = new Audio('../assets/sound/dancing-queen.mp3')
        const nirvanaAudio: HTMLAudioElement = new Audio('../assets/sound/nirvana.mp3')
        const maybelleneAudio: HTMLAudioElement = new Audio('../assets/sound/maybellene.mp3')

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
        })
        maybellenePause.addEventListener('click', () => {
            maybelleneAudio.pause();
        });

    });
})();


