const fs = require('node:fs');
const path = require('node:path');

function findHtmlFiles(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
        const filePath = path.join(directory, entry.name);

        if (entry.isDirectory()) return findHtmlFiles(filePath);
        if (!entry.isFile() || !entry.name.endsWith('.html')) return [];

        if (entry.name === 'contact.html') {
          // This is a fictional address, intentionally blurred.
          return [{ url: filePath, hideElements: '#address' }];
        }

        return [filePath];
    });
}

const defaults = {};

if (process.env.CI === 'true') {
    defaults.chromeLaunchConfig = {
        args: ['--no-sandbox']
    };
}

module.exports = {
    defaults,
    urls: findHtmlFiles(path.join(__dirname, 'dist'))
};
