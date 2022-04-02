class Message {

    private uid;
    private name;
    private message;

    constructor(uid: string, name: string, message: string) {
        this.uid = uid;
        this.name = name;
        this.message = message;
    }
}

class ChatMessages {

    private messages: string[];
    private users: any;

    constructor() {
        this.messages = [];
        this.users = {}
    }
    public get last10() {
        this.messages.splice(0, 10);
        return this.messages;
    }

    public get usersArr() {
        return Object.values(this.users); //[{},{},{}]
    }

    sendMessage(uid: string, name: string, message: string) {
        this.messages.unshift(
            // new Message(uid, name, message)
        )
    }

    connectUser(user: any) {
        this.users[user.id] = user
    }

    disconnectUser(id: any) {
        delete this.users[id];
    }
}

export default ChatMessages; 