# Commands

## General

| Command                    | Description                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npx npm-check-updates -u` | Update dependency version ranges in `package.json`                                                               |
| `npm install`              | Installs dependencies from `package.json`, may update `package-lock.json` &rarr; use for development             |
| `npm ci`                   | (aka "clean install") Installs _exactly_ as in `package-lock.json`: faster and reproducible &rarr; use for CI/CD |

## Custom

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `npm run build:css` | Compile Sass files to CSS in `dist/css`                   |
| `npm run serve`     | Start local server on the `dist` folder to test the build |
| `npm run test:a11y` | Build the CSS and run the accessibility checks            |
| `npm run watch`     | Watch and compile Sass files to CSS in `dist/css`         |

**Note**: initially there was also a `npm run deploy` for deploying to GitHub Pages. Deployment is now managed by the workflow in `.github/workflows/deploy.yml`, which runs when changes are pushed to `main` or when manually triggered.

# Resources

Here are some links to the resources I have used:

- [SASS Documentation](https://sass-lang.com/documentation/)
- [Font Awesome](https://fontawesome.com)
- [Form Submit](https://formsubmit.co)
- [Favicon Generator](https://favicon.io)
- [GitHub Pages](https://pages.github.com)
- [QR Code Generator](https://it.qr-code-generator.com)
- [Buy me a coffee](https://www.buymeacoffee.com)
- Accessibility:
  - PageSpeed Insights (Lighthouse): https://pagespeed.web.dev/
  - WAVE: https://wave.webaim.org/
  - Contrast Checker: https://webaim.org/resources/contrastchecker/
  - AXE DevTools (browser extension)
