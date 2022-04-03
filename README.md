# 💬 ACTIVA CHAT 💬

_Chat made as final project of the Node.js course by [Daniel Españadero](https://github.com/DanielEspanadero) at IT Academy in Barcelona._

## Starting 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._
_The project has two servers, the client side to create the 'seo friendly' routes and the server side to configure the backend part (Sockets, Json Web Tokens, REST apis...). Remember to start both servers individually, each on a different port._

### Translations 💬

_This README file is also available in other languages:_
- [Catalan](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/README-cat.md)
- [French](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/README-fr.md)
- [German](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/README-de.md)
- [Italian](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/README-it.md)
- [Portuguese](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/README-pt.md)
- [Spanish](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/README-es.md)
- [Swedish](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/README-se.md)

### Pre-requirements 📋

_For the project to work correctly, it is recommended to have a series of programs installed and properly configured:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation 🔧

_Remember to execute the following command in the terminal both in the frontend (client/src) and in the backend (server) to install the dependencies and that everything works correctly:_
```
npm install
```

## Environment variables .env 🪛

_To use the environment variables and for everything to work correctly, you have to create a file called .env for which you can find a template with the data you need in the .config.env file (Remember that you have to create the file both in the frontend as in the backend)._

## Commands to execute ⌨️
⚠️ _BEFORE STARTING, REMEMBER TO HAVE THE MONGODB SERVER STARTED_ ⚠️

_Once all the necessary programs and dependencies are installed, simply run the following command on both the frontend and backend:_
```
npm start
```

## client 🖥

_The client part is an application made with HTML, CSS and TypeScript. The first page is a login where you only have to enter the user's email and password. It is also possible to log in with the google account which in turn can be used to register (That's why it is omitted in the registration window)._

![Demo](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/front-01.png)

_Another option we have is to recover the password through email._
_The module used to carry out this action is [nodemailer](https://nodemailer.com/about/)._

![Demo](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/front-02.png)

_We will also have the option to register by entering our name, surname, email and password that we want to use._

![Demo](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/front-03.png)

### Mobile first 📱

_Currently responsive web design is a somewhat outdated practice and search engines like google prioritize Mobile first, do mobile design first and go from less to more in @media queries._

![Demo](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/responsive-login.png)
![Demo](https://github.com/DanielEspanadero/activa-chat/blob/master/docs/responsive-chat.png)

### Form validations 🆗🗂

_Form validations performed both from the client and from the server to check things such as what is entered in an email and that said email is valid or limit the characters that can be written in a given field._

### Call to the API's created from the backend 📞⚙️

_Through the fetch requests, the calls to the API's created on the server side are made. Keep in mind that for it to work, you must have the two servers activated on a different port each, for example the client on port 3000 and the server on port 8000._

### Songs 🎧

_The initial idea was to be able to upload the songs through a dependency like multer, that they be added to the list and be able to listen to them, delete them... But it was quite complicated for me when validating certain things and since it is not the main objective of the project, I left some songs to be able to implement this function in the future._
_The audio was made using the native JavaScript Javascript API to work with multimedia files directly from the browser. In this way, we can allow the user to interact with multimedia resources dynamically, and even create a multitude of interesting applications that use both audio and video files._
_A basic example to play a .mp3 multimedia file from our browser could be the following:_
```
const audio = new Audio('../assets/sound/imagine.mp3');
audio.play();
```
_The audio constant contains an instance of the Audio object, to which the path of the .mp3 file that we want to initialize is passed as a parameter. Instead of a path, we can also indicate simply through an .mp3 URL, with which the browser would look for said file in guthub for example and thus we do not load the project so much, in this case I have not done it in the most correct way since there are only 4 test songs._
_Next, we execute the .play() function of the newly created audio instance._

### Emojis 🙂❤️

_The emojis that I have used are from an existing library, to be able to introduce them in your project you have to copy this in your HTML:_

```
<script src="https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@3.0.3/dist/index.min.js"></script>

<button id="emoji-button">Click Me</button>

<input type="text">
```

_Once the HTML is pasted, we link a JavaScript file to the HTML and enter the following code:_

```
const button = document.querySelector('#emoji-button');

const picker = new EmojiButton();

button.addEventListener('click', () => {
  picker.togglePicker(button);
  
});

  picker.on('emoji', emoji => {
    document.querySelector('input').value += emoji;
  });
```