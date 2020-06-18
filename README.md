# EventMap Mobile

Mobile app for EventMap. Built with React Native with Expo SDK.

[See the design here!](https://www.figma.com/file/LeYZgizktShMbaU5YMRI9R/EventMap-Brainstorm?node-id=43%3A2)

## Initial To-dos

- Add more information to the README
- Set up the project board for more tasks

## Table of Contents

- [Requirements](#requirements)
- [Quick Setup](#quick-setup)
- [Autoformatting Setup](#autoformatting-setup)
- [Contributing](#contributing)

## Requirements

- [Node JS (LTS version 12 preferred)](https://nodejs.org/en/)
- [Expo-CLI.](https://expo.io/)
- [Yarn](https://yarnpkg.com/)

## Quick Setup

1. Clone the repo and go inside the folder.

```
git clone https://github.com/opaquee/EventMapMobile.git
cd EventMapMobile
```

2. Install dependencies

```
yarn install
```

3. Start the app

```
expo start
```

4. A new browser window should pop up, as well as new information in the terminal. You can simulate iOS (with an Apple device) or Android devices or scan the QR code with the expo client app.

## Autoformatting setup

1. For VSCode users, add these in your `settings.json` file by pressing `Control/Command + Shift + P` and searching `open setting (JSON)`.

```
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"editor.formatOnSave": true,
"[javascript]": {
"editor.formatOnSave": false,
"editor.tabSize": 2
},
"[javascriptreact]": {
"editor.formatOnSave": false,
"editor.tabSize": 2
},
"[typescript]": {
"editor.formatOnSave": false,
"editor.tabSize": 2
},
"[typescriptreact]": {
"editor.formatOnSave": false,
"editor.tabSize": 2
}
```

2. If you have other text editors, like up eslint/prettier automatting with your editor.

## Contributing

When contributing, make a branch with your own feature, and then submit a pull request if you want to push your changes to master. Please do not directly commit to master for big changes.
