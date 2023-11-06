# Workflow CA - Friendly #
##### Me and Fredrik Tokle have been working on eachothers projects.

His original project deployed on Netlify: https://fantastic-faun-dda1fa.netlify.app/feed/
GitHub Pages site: https://runeunhjem.github.io/workflow-ca/

[![Deploy and Build to GitHub Pages](https://github.com/runeunhjem/workflow-ca/actions/workflows/deploy.yml/badge.svg)](https://github.com/runeunhjem/workflow-ca/actions/workflows/deploy.yml)

### Configurations:
Issue 1.
We are supposed to fork the project, but that is not possible as i have fork from the css-frameworks in my own account from when we did the css-frameworks-ca.
So I, after clearing this with Abi, have cloned the project and set new remote origin url in the new repository for it.
Issue 2.
The logOut function was not exported in the original project, so i have added that export to the code, after Fredrik talked to Connor about this and was told that
it was ok to do so. This, because it was important to test the actual code, not use a mock test for this function.
Issue 3.
GitHub pages does not follow the relative paths that are used in the project. This gives a 404 error when trying to access anything after login page.
Tried adding baseurl: workflow-ca/ to the _config.yml and the settings.yml (both in case one is better than the other) to see if this would give desired result, but it did not.
Also tried baseurl: https://runeunhjem.github.io/workflow-ca
This did not work either.

Implemented Jest for unit testing.
Implemented Cypress for end-to-end testing.
Added ESLint and Prettier for consistent code formatting.
Set up Husky and lint-staged to automatically run ESLint and Prettier on commits.

### Jest:
[![Automated Unit Testing](https://github.com/runeunhjem/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/runeunhjem/workflow-ca/actions/workflows/unit-test.yml)

Automatically test the following functionalities with unit tests:
* The login function is tested to see if it fetches accesstoken and stores it in localStorage when provided with a valid email and password.
* The logout function is tested to verify it clears the token from local storage.


### Cypress:
[![Automated E2E Testing](https://github.com/runeunhjem/workflow-ca/actions/workflows/main.yml/badge.svg)](https://github.com/runeunhjem/workflow-ca/actions/workflows/main.yml)

Do automated end-to-end tests on the following functionalities:
* The user can log in with the login form with valid credentials.
* The user cannot submit the login form with invalid credentials and is shown a message.
* The user can log out with the logout button and localStorage clears name and accessToken.


#### Issues added to the issues tab:
1. Both Jest and Cypress logOut tests will fail due to this code in original project:
```javascript
// js/utils/editBtn.js
export const logOut = () => {
  localStorage.removeItem("name", "token");
  window.location.href = `../../index.html`;
};
  ```


## css-frameworks-ca by Fredrik Tokle:

![Friendly](https://github.com/Tokle89/css-frameworks/assets/94007467/216af4e8-93c7-4f9f-9292-b2401af816e7)
Was asked to create a social media site using bootstrap and scss to show knowledge in using the framework.

Site architecture:

- Home page
- Feed
- Profile

## Built with

-Html

- Bootstrap / Scss

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Tokle89/healthy-life
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contribution

If you would like to contribute to my project - Just make a pull request and push your changes

## Contact

[My LinkedIn page](https://www.linkedin.com/in/fredrik-tokle-0994a023b/)
