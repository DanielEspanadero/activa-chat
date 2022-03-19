(() => {
    window.addEventListener('load', () => {

        const login: any = document.querySelector('#login-form-container')!;
        const data = new FormData(login);
        // let firstName: HTMLInputElement = document.querySelector('#first-name')!;
        // let lastName: HTMLInputElement = document.querySelector('#last-name')!;
        // let email: HTMLInputElement = document.querySelector('#email')!;
        // let password: HTMLInputElement = document.querySelector('#password')!;

        const URL: string = 'http://localhost:5000/register';

        // let nombre = firstName.value
        // let apellido = lastName.value
        // let correo = email.value

        let firstName = 'Hola';
        let lastName = 'frefe'
        let email = 'ferfe'

            login.addEventListener('submit', (ev: any) => {
                ev.preventDefault();

                fetch(URL, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                    body: JSON.stringify(data)
                })
                    .then(resp => resp.json())
                    .then(({ msg, token }) => {
                        if (msg) {
                            return console.error(msg);
                        }
                        // localStorage.setItem(token);
                    })
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
    });
})();