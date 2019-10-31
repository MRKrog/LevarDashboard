import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from 'aws-amplify';
import config from './config';

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
	API: {
		endpoints: [
			{
				name: 'testApiCall',
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			}
		]
	}
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
