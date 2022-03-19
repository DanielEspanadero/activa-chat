import { Schema, model } from 'mongoose';

const UserSchema: any = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required.']
    },
    avatar: {
        type: String,
        default: 'https://github.com/DanielEspanadero/activa-chat/blob/master/client/public/assets/img/man.png'
    },
    date: {
        type: Date,
        required: true
    }
},
    {
        versionKey: false
    }
);

export const User = model('User', UserSchema)