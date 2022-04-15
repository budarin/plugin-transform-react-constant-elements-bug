const fs = require('fs');
const path = require('path');

const clientConfig = require(path.resolve('config/webpack/client/webpack.config'));

const checkTime = 1000;
const waitingFile = path.resolve(`${clientConfig.output.path}/assets-manifest.json`);

const timerId = setInterval(() => {
    const isExists = fs.existsSync(waitingFile);
    if (isExists) {
        clearInterval(timerId);
    } else {
        console.log(`wait for: "${waitingFile}"`);
    }
}, checkTime);
