## 💬 ACTIVA CHAT 💬

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

### Form validations 🆗🗂

_Form validations performed both from the client and from the server to check things such as what is entered in an email and that said email is valid or limit the characters that can be written in a given field._

### Call to the API's created from the backend 📞⚙️

_Through the fetch requests, the calls to the API's created on the server side are made. Keep in mind that for it to work, you must have the two servers activated on a different port each, for example the client on port 3000 and the server on port 8000._