export const commands = {
    cd: {
        name: 'cd',
        numberOfArgs: 1,
    },
    up: {
        name: 'up',
        numberOfArgs: 0,
    },
    ls: {
        name: 'ls',
        numberOfArgs: 0,
    },
    cat: {
        name: 'cat',
        numberOfArgs: 1,
    },
    add: {
        name: 'add',
        numberOfArgs: 1,
    },
    rn: {
        name: 'rn',
        numberOfArgs: 2,
    },
    cp: {
        name: 'cp',
        numberOfArgs: 2,
    },
    mv: {
        name: 'mv',
        numberOfArgs: 2,
    },
    rm: {
        name: 'rm',
        numberOfArgs: 1,
    },
    os: {
        name: 'os',
        numberOfArgs: 1,
    },
    hash: {
        name: 'hash',
        numberOfArgs: 1,
    },
    compress: {
        name: 'compress',
        numberOfArgs: 2,
    },
    decompress: {
        name: 'decompress',
        numberOfArgs: 2,
    },
    '.exit': {
        name: '.exit',
        numberOfArgs: 0,
    }
}

export const OSCommands = {
    EOL: '--EOL',
    cpus: '--cpus',
    homedir: '--homedir',
    username: '--username',
    architecture: '--architecture',
}