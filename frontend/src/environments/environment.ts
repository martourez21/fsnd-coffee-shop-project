/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-fdvvrnce.us.auth0.com', // the auth0 domain prefix
    audience: 'coffee-shop', // the audience set for the auth0 app
    clientId: 'lLEmrJ4QI27yCRQXaQzPtwVXzgpFSpga', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:5000/drinks', // the base url of the running ionic application. 
  }
};

