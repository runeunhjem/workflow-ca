// Imported logOut form editBtn.js, but this was not exported in Fredrik's original code
// Connor said to add export to the logOut function so we could test the actual function
// and not make mock test of the logOut function.

// So since the localStorage.removeItem("name", "token"); is in one line in editBtn.js, this test will fail.
// It will only remove "name" from localStorage and not "token".
// This is reported as a bug in editBtn.js to issues tab on GitHub.

import { logOut } from "./editBtn.js";
import "jest-localstorage-mock";

describe("logOut", () => {
  it('should remove the "token" from local storage', () => {
    // Call setup to initialize the local storage mock
    localStorage.clear();

    // Add a token to local storage
    localStorage.setItem("token", "exampleToken");

    // Call the logOut function
    logOut();

    // Expect that localStorage.removeItem was called with 'token'
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");

    // Expect that localStorage.getItem('token') returns null after logOut
    expect(localStorage.getItem("token")).toBeNull();
  });
});


