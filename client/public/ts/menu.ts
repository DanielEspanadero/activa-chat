(() => {
    window.addEventListener('load', () => {
        const rooms: HTMLDivElement = document.querySelector('#button-rooms')!;
        const roomsContainer: HTMLDivElement = document.querySelector('.hidden-rooms')!;
        const users: HTMLDivElement = document.querySelector('#button-users')!;
        const usersContainer: HTMLDivElement = document.querySelector('.hidden-users')!;
        const chatContainer: HTMLElement = document.querySelector('.hidden-chat')!;

        rooms.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                roomsContainer.classList.toggle('hidden-rooms');
                chatContainer.classList.toggle('hidden-chat');
            };
        });
        users.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                usersContainer.classList.toggle('hidden-users');
                chatContainer.classList.toggle('hidden-chat');
            };
        });
    });
})()