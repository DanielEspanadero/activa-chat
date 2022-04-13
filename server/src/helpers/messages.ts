const moment = require('moment');

export function formatMessage(username: any, text: any) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
};
