# Commands

## General

| Command                    | Description                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npx npm-check-updates -u` | Check for version updates in `package.json`                                                                      |
| `npm install`              | Installs dependencies from `package.json`, may update `package-lock.json` &rarr; use for development             |
| `npm ci`                   | (aka "clean install") Installs _exactly_ as in `package-lock.json`: faster and reproducible &rarr; use for CI/CD |

## Custom

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `npm run build:css` | Compile Sass files to CSS in `dist/css`                   |
| `npm run deploy`    | Publish the `dist` folder to GitHub Pages                 |
| `npm run serve`     | Start local server on the `dist` folder to test the build |
| `npm run watch`     | Watch and compile Sass files to CSS in `dist/css`         |

# Troubleshooting

If you encounter errors during the deployment script, delete the `node_modules/.cache` folder and then re-run it.

# Resources

Here are some links to the resources I have used:

- [SASS Documentation](https://sass-lang.com/documentation/)
- [Font Awesome](https://fontawesome.com)
- [Form Submit](https://formsubmit.co)
- [Favicon Generator](https://favicon.io)
- [GitHub Pages](https://pages.github.com)
- [QR Code Generator](https://it.qr-code-generator.com)
- [Buy me a coffee](https://www.buymeacoffee.com)
