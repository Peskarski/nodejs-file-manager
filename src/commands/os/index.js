import { EOL, arch, homedir, cpus, userInfo } from 'os';
import { OSCommands } from '../../helpers/constants.js';

const getEOL = () => JSON.stringify(EOL);
const getUsername = () => userInfo().username;
const getCPUS = () => {
    const overalAmoutOfCPUS = cpus().length;

    const CPUSInfo = cpus().map(({ model, speed }) => ({
        model,
        speed: `${speed / 1000} GHz`,
    }))

    return {
        overalAmoutOfCPUS,
        CPUSInfo,
    }
}

const actions = {
    [OSCommands.EOL]: getEOL,
    [OSCommands.cpus]: getCPUS,
    [OSCommands.homedir]: homedir,
    [OSCommands.architecture]: arch,
    [OSCommands.username]: getUsername,
}

export const executeOSCommand = (command) => {
    if (!actions[command]) {
        throw Error('Invalid input');
    }
    console.log(actions[command]());
}