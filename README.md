## ppmtool backend server
Frontend server for [Personal Project Management Tool](https://github.com/yshensh/ppmtool-heroku) <br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) <br />

## Local Development Setup
IDE: Visual Studio Code <br />
Web Browser: Chrome (React Developer Tools , Redux DevTools) <br />
Programming Languagel: NodeJS, CSS, html <br />

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

To build the app properly for local test or production, please update the following line in `package.json`:<br />
- [local] `"proxy": "http://localhost:8080"`
- [Heroku] `"https://ppmtool-demo.herokuapp.com/"` (for example)

If you are going to deploy frontend app with backend app to Heroku, you will need to copy all files under `build` directory to Spring backend code directory`src/main/resources/static`.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
