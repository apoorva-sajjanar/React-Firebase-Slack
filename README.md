**React Firebase Slack Application**

Slack is a proprietary business communication channel-based messaging
platform. Technologies used in building this application are React, Redux
and Firebase Cloud.


Click <a href="https://react-slack-e5339.web.app/" target="_blank">here</a>
for live demo of the slack application.



https://user-images.githubusercontent.com/85893398/124540272-ac985300-de3c-11eb-87ba-bd70b21399ba.mp4



<br/>
<br/>
⭐ Getting started

<br/>
To start setting up the project<br/>

<b> Step 1:</b> Clone the repo:<br/>

`git clone https://github.com/apoorva-sajjanar/React-Firebase-Slack` <br/>

<b>Step 2:</b> cd into the cloned repo and run: <br/>

`npm i`

<b>Step 3:</b> create src/base/firebase.js file and Put your firebase credentials in it: <br/>

```
import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDMMppYBvwaeI0US-aMle9r979XqjXzToc",
    authDomain: "react-slack-e5339.firebaseapp.com",
    databaseURL: "https://react-slack-e5339.firebaseio.com",
    projectId: "react-slack-e5339",
    storageBucket: "react-slack-e5339.appspot.com",
    messagingSenderId: "891002544306",
    appId: "1:891002544306:web:ea5b6ba6ac845df2b829ab",
    measurementId: "G-GFTYJ8XR1D"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics();

export default firebase
```
<br/>

<b>Step 4 :</b>start your server and hit localhost by:
<br/>


`npm start`
Runs the app in the development mode. <br/>
Open http://localhost:3000 to view it in the browser. <br/>

The page will reload if you make edits. <br/>

You will also see any lint errors in the console. <br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
