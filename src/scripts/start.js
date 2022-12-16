import { helloMessage, goodbyeMessage, directionMessage } from '../helpers/messages.js';

const start = () => {
    const userNameArg = process.argv.find((arg) => arg.toString().startsWith('--username'));
    if (!userNameArg) {
        console.error('Invalid input');
        process.exit();
    }

    const userName = userNameArg.split('=')[1];
    console.log(helloMessage(userName));
    console.log(directionMessage(process.cwd()));

    process.on('exit', () => {
        console.log(goodbyeMessage(userName));
    });
}

export default start;