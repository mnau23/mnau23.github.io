# Commands

## General

| Command                    | Description                                 |
| -------------------------- | ------------------------------------------- |
| `npx npm-check-updates -u` | Check for version updates in `package.json` |
| `npm install`              | Install dependencies                        |

## Custom

| Command          | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `npm run sass`   | Compiles Sass files and automatically updates CSS in `dist/css`   |
| `npm run serve`  | Start local server on the `dist` folder locally to test the build |
| `npm run deploy` | Publish the `dist` folder to GitHub Pages                         |

# Troubleshooting

If you encounter errors during the deployment script, delete the `node_modules/.cache` folder and then re-run it.
