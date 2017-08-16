#Desktop
This is the Desktop version of the platform

### Getting up and running

And then install dependencies with npm:
**Note**: I'll try push the dependencies for now, so you don't need to do this step

```bash
$ npm install
```

## Run

Start the app in `dev` mode:

```bash
$ npm run dev
```

Run these two commands __simultaneously__ in different console tabs (One after the other):

```bash
$ npm run hot-updates-server
$ npm run start-hot-renderer
```

## DevTools for debugging

#### Toggling Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>


## Packaging

To package apps for the local platform:

```bash
$ npm run package
```

To package apps for all platforms:

```bash
$ npm run package-all
```

To package apps with options:

```bash
$ npm run package -- --[option]
```

## Further commands

To run the application without packaging:

```bash
$ npm run build
$ npm start
```

To run End-to-End Test:

```bash
$ npm run build
$ npm run test-e2e
```
