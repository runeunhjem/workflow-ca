// Imported logOut form editBtn.js, but this was not exported in Fredrik's original code
// Connor said to add export to the logOut function so we could test the actual function
// and not make mock test of the logOut function.

// So since the localStorage.removeItem("name", "token"); is in one line in editBtn.js, this test will fail.
// It will only remove "name" from localStorage and not "token".
// This is reported as a bug in editBtn.js to issues tab on GitHub.

import { logOut } from "./editBtn.js";
import "jest-localstorage-mock";

describe("logOut", () => {
  it("should remove name and token from localStorage and navigate to the home page", () => {
    // Mock the navigateTo function
    const navigateTo = jest.fn();

    // Mock window.location.href to avoid the "Not implemented: navigation" error
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: "" };

    logOut(navigateTo);

    // Ensure localStorage.removeItem is called for "name" and "token"
    expect(localStorage.removeItem).toHaveBeenCalledWith("name");
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");

    // Verify that navigateTo was called with the expected URL
    expect(navigateTo).toHaveBeenCalledWith("../../index.html");

    // Reset window.location to its original state
    window.location = originalLocation;
  });
});

