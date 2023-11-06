# Workflow CA - Friendly #
##### Me and Fredrik Tokle have been working on eachothers projects.

His original project deployed on Netlify: [fantastic-faun-dda1fa](https://fantastic-faun-dda1fa.netlify.app/feed/)
GitHub Pages site: [runeunhjem/workflow-ca](https://runeunhjem.github.io/workflow-ca/)

![Deploy and Build to GitHub Pages](https://github.com/runeunhjem/workflow-ca/actions/workflows/deploy.yml/badge.svg)

### Configurations:
- **Issue 1:**
  We were supposed to fork the project, but as I had previously forked it for the css-frameworks-ca, I cloned the project and set a new remote origin URL after Abi's approval.

- **Issue 2:**
  The `logOut` function was not exported in the original project, but I added the export after discussing it with Fredrik and Connor to test the actual code.

- **Issue 3:**
  GitHub Pages doesn't follow the relative paths used in the project, causing a 404 error after the login page. We tried adding `baseurl: workflow-ca/` to `_config.yml` and `settings.yml`, and also `baseurl: https://runeunhjem.github.io/workflow-ca`, but neither worked.

### Implemented Enhancements:
- Jest:
  ![Automated Unit Testing](https://github.com/runeunhjem/workflow-ca/actions/workflows/unit-test.yml/badge.svg)
  - Tested the login function to fetch an access token and store it in localStorage with valid credentials.
  - Tested the logout function to clear the token from local storage.

- Cypress:
  ![Automated E2E Testing](https://github.com/runeunhjem/workflow-ca/actions/workflows/main.yml/badge.svg)
  - Tested user login with valid credentials.
  - Checked that the login form rejects invalid credentials.
  - Verified that the logout button clears localStorage for name and accessToken.

#### Issues Added to the Issues Tab:
1. Jest and Cypress logOut tests may fail due to the code in the original project:

```javascript
// js/utils/editBtn.js
export const logOut = () => {
  localStorage.removeItem("name", "token");
  window.location.href = `../../index.html`;
};


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
