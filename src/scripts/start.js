import { helloMessage, goodbyeMessage, directionMessage } from '../helpers/messages.js';
import { rl } from '../readline/index.js';

const start = () => {
    const userNameArg = process.argv.find((arg) => arg.toString().startsWith('--username'));
    if (!userNameArg) {
        console.error('Invalid input');
        process.exit();
    }

    const userName = userNameArg.split('=')[1];
    console.log(helloMessage(userName));
    console.log(directionMessage(process.cwd()));

    rl.on('SIGINT', () => {
        console.log(goodbyeMessage(userName));
        process.exit();
    });
}

export default start;