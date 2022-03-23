(() => {
    window.addEventListener('load', () => {

        const login: any = document.querySelector('#login-form-container')!;
        const URL: string = 'http://localhost:5000/register';

        login.addEventListener('submit', (ev: any) => {
            ev.preventDefault();
            const formData: any = {};

            for (let el of login.elements) {
                if (el.name.length > 0)
                    formData[el.name] = el.value
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
                .catch((err: any) => {
                    console.log(err);
                });
        });
    });
})();