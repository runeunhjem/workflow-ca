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
