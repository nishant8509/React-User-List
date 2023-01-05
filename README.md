# React User List and Detail View

This is a simple React project that demonstrates how to retrieve a list of users from an API and display the data in a list view. The user list can be filtered by clicking on a user's name, which will trigger an API request to retrieve the detailed data for that user and display it in a separate view.

## Prerequisites

Before running this project, make sure you have the following software installed on your system:

* Node.js
* npm (normally comes with Node.js)

## Description

* `public/index.html` is the root HTML file for the application.
* `src/actions.js` contains action creators that make API requests and dispatch actions to the Redux store.
* `src/App.js` is the root React component of the application.
* `src/index.js` is the entry point for the application. It renders the `App` component within a `Provider` component, which makes the Redux store available to the rest of the application.
* `src/reducers.js` contains a reducer function that updates the store state based on the actions dispatched to the store.
* `src/store.js` contains the configuration for the Redux store.
* `src/UserCard.js` is a presentational React component that displays the data for a single user.

## Functionality

1. When the application mounts, the `App` component uses the `fetchUsers` action creator to retrieve a list of users from the API.
2. The `App` component renders a list of buttons, one for each user in the list.  Each button has an `onClick` handler that calls the `handleClick` function and passes the button's index as an argument.
3. The `handleClick` function calls the `fetchUser` action creator and passes the index as an argument. This causes the Redux store to dispatch a LOADING_USER action and make an API request to retrieve a single user by ID. When the API response is received, the store dispatches a FETCH_USER action with the user data as the payload.
4. The App component also renders a UserCard component, which displays the data for a single user. The UserCard component receives the user data as a prop from the App component. The App component receives the user data from the Redux store via the mapStateToProps function. The mapStateToProps function extracts the user object from the store state and passes it to the UserCard component as a prop.

5. The reducers.js file contains a reducer function that updates the store state based on the actions dispatched to the store. The LOADING_USERS and LOADING_USER actions update the loading field in the store state, which is used to display a loading indicator. The FETCH_USERS and FETCH_USER actions update the users and user fields in the store state, respectively, with the data received from the API.


