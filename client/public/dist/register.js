"use strict";
(() => {
    window.addEventListener('load', () => {
        const login = document.querySelector('#login-form-container');
        const URL = 'http://localhost:5000/register';
        login.addEventListener('submit', (ev) => {
            ev.preventDefault();
            const formData = {};
            for (let el of login.elements) {
                if (el.name.length > 0)
                    formData[el.name] = el.value;
            }
            console.log(formData);
            fetch(URL, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData)
            })
                .then(resp => resp.json())
                .then(({ msg, token }) => {
                if (msg) {
                    return console.error(msg);
                }
                // localStorage.setItem(token);
                // window.location.href = '/chat';
            })
                .catch((err) => {
                console.log(err);
            });
        });
    });
})();
//# sourceMappingURL=register.js.map