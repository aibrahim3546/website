# React TypeScript Boilerplate
This is a boilerplate code for **React** + **TypeScript** + **Redux**
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with [TypeScript](https://www.typescriptlang.org/) template.

## Features
- Package Manager - Yarn
- Webpack 4 - Version 4
- Redux ([@reduxjs/toolkit](https://redux-toolkit.js.org/)) - Version 1.5.1
- Styled Components - Version 5.2.3
- React Router (react-router-dom) - Version 5.2.0
- Axios - version 0.21.1
- eslint (airbnb) - Version 7.2.0
- Cypress - E2E testing Version 7.1.0
- Jest (@testing-library/react) - Unit testing
- [Commitlint](https://github.com/conventional-changelog/commitlint) - lint for commit message - Version 12.1.1

## Folder Structure
```
/src
  - /components // shared components
    - /Button
      - Button.tsx
      - IconButton.tsx
  - /services
    - userService.ts // append 'Service' at the end for slice file
  - /store // redux store
    - /storeOne
      - storeOneSlice.ts // append 'Slice' at the end for slice file
    - hooks.ts
    - index.ts
  - /typings
    - /dto
      - ...
    - /global
      - ...
  - /pages
    - /Home
      /__test__
        - HomePage.test.tsx
      /components // components that is used within the page
        - Header.tsx 
      - HomePage.tsx // append 'Page' at the end for page file
    ...
  
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`
Runs unit testing for available pages

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## E2E Test Scripts

### `yarn run cypress:run`
Runs the e2e test for covered test cases. Can find integration file at `cypress/integration/*.ts`.

### `yarn run cypress:open`
Will open the cypress GUI.
