(() => {
    window.addEventListener('load', () => {
        const miFormulario: any = document.querySelector('#login-form-container')!;

        const url: string = 'http://localhost:5000/auth/login'



        miFormulario.addEventListener('submit', (ev: any) => {
            ev.preventDefault();
            const formData: any = {};

            for (let el of miFormulario.elements) {
                if (el.name.length > 0)
                    formData[el.name] = el.value
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(resp => resp.json())
                .then(({ msg, token }) => {
                    if (msg) {
                        return console.error(msg);
                    }
                    localStorage.setItem('token', token);
                    window.location.href = '/chat';
                })
                .catch(err => {
                    console.log(err);
                })

        });
        function onSignIn(googleUser: any) {

            const url = 'http://localhost:3000/auth/google';

            var id_token = googleUser.getAuthResponse().id_token;
            const data = { id_token };

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(resp => resp.json())
                .then(({ token }) => {
                    localStorage.setItem('token', token);
                    window.location.href = '/chat';
                })
                .catch(console.log);
        };
    });
})();