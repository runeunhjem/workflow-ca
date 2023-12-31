# Workflow CA - Friendly

#### Me and Fredrik Tokle have been working on each others projects.

##### His original project deployed on Netlify: https://fantastic-faun-dda1fa.netlify.app/feed/

###### GitHub Pages site: https://runeunhjem.github.io/workflow-ca/

[![Deploy and Build to GitHub Pages](https://github.com/runeunhjem/workflow-ca/actions/workflows/deploy.yml/badge.svg)](https://github.com/runeunhjem/workflow-ca/actions/workflows/deploy.yml)

### Requirements:

Clone the project.

```bash
git clone https://github.com/runeunhjem/workflow-ca.git
```

Install dependencies:

```bash
npm install
```

Run the tests locally:

```bash
npm run test-unit
npm run test-e2e-cli (or npm run test-e2e to open in browser)
```

##### PS! Due to faulty code in original project, the logout tests will fail.

<b> I have included a fix for this in the workflow-fix-logout branch,
but this is not merged into workflow branch as it is not allowed to change original code. All tests pass and badges are green in that branch.</b>

#### Tests locations:

- Unit tests: js/entry/login.test.js and js/utils/editBtn.test.js
- E2E tests: cypress/e2e/friendly-tests

### Configurations:

##### Issue 1.

We are supposed to fork the project, but that is not possible as i have fork from the css-frameworks in my own account from when we did the css-frameworks-ca.
So I, after clearing this with Abi, have cloned the project and set new remote origin url in the new repository for it.

##### Issue 2.

The logOut function was not exported in the original project, so i have added that export to the code, after Fredrik talked to Connor about this and was told that it was ok and recommended to do so here. This, because it was important to test the actual code, not use a mock test for this function.

##### Issue 3.

GitHub pages does not follow the relative paths that are used in the project. This gives a 404 error when trying to access anything after login page.
Tried adding baseurl: /workflow-ca to the \_config.yml and the settings.yml (both in case one is better than the other) to see if this would give desired result, but it did not.
Also tried baseurl: https://runeunhjem.github.io/workflow-ca
This did not work either.

- Implemented Jest for unit testing.
- Implemented Cypress for end-to-end testing.
- Added ESLint and Prettier for consistent code formatting.
- Set up Husky and lint-staged in separate branch, workflow-formatting, to automatically run ESLint and Prettier on commits.

#### Jest:

[![Automated Unit Testing](https://github.com/runeunhjem/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/runeunhjem/workflow-ca/actions/workflows/unit-test.yml)

Automatically test the following functionalities with unit tests:

- The login function is tested to see if it fetches accesstoken and stores it in localStorage when provided with a valid email and password.
- The logout function is tested to verify it clears the token from local storage.

#### Cypress:

[![Automated E2E Testing](https://github.com/runeunhjem/workflow-ca/actions/workflows/main.yml/badge.svg)](https://github.com/runeunhjem/workflow-ca/actions/workflows/main.yml)

Do automated end-to-end tests on the following functionalities:

- The user can log in with the login form with valid credentials.
- The user cannot submit the login form with invalid credentials and is shown a message.
- The user can log out with the logout button and localStorage clears name and accessToken.

#### Bugs/issues added to the issues tab:

1. Both Jest and Cypress logOut tests will fail due to this code in original project:

```javascript
// js/utils/editBtn.js
export const logOut = () => {
  localStorage.removeItem("name", "token");
  window.location.href = `../../index.html`;
};
```

###### Fix is in the workflow-fix-logout branch with working tests and passing badges.

2. GitHub Pages 404 error when trying to access anything after login page.

GitHub Pages not correctly interpreting the relative path for the window.location.replace("../../profile/index.html"); statement in your JavaScript code is likely due to differences in how GitHub Pages and Netlify handle relative paths.

So without changing original code i cannot get this to work properly.
Abi showed me a solution that kinda fixed it, but not quite, and his solution also required me to change original code, wich in this case is not allowed.

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
