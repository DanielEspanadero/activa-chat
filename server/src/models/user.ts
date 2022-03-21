import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    status: boolean;
    comparePassword: (password: string) => Promise<Boolean>
};

const UserSchema: any = new Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required.']
    },
    lastName: {
        type: String,
        required: [true, 'last name is required.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    avatar: {
        type: String,
        default: 'https://github.com/DanielEspanadero/activa-chat/blob/master/client/public/assets/img/man.png'
    },
    status: {
        type: Boolean,
        default: true
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

export const User = model<IUser>('User', UserSchema);