import { loginUser } from "./login.js";
import { setLocalStorage, fetchLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";
// import { fetchLocalStorage } from "../localStorage/localStorage.js"; // Import the fetchLocalStorage function

jest.mock("../localStorage/localStorage.js", () => ({
  setLocalStorage: jest.fn(),
  fetchLocalStorage: jest.fn(),
}));
jest.mock("../api/constant.js", () => ({ apiUrls: { login_Url: "mocked-api-url" } }));
jest.mock("../api/api.js", () => ({ apiCall: jest.fn() }));

describe("loginUser", () => {
  it("should fetch and store token in local storage", async () => {
    // Mock the API response
    const mockAccessToken = "mocked-access-token";
    const mockName = "Ola Nordmann";
    apiCall.mockResolvedValue({ accessToken: mockAccessToken, name: mockName });

    // Mock the input elements
    const emailInput = { value: "valid@stud.noroff.no" };
    const passwordInput = { value: "password1234" };

    // Call the login function
    await loginUser(emailInput, passwordInput);

    // Assert that the functions were called as expected
    expect(apiCall).toHaveBeenCalledWith("mocked-api-url", "post", expect.any(String));
    expect(setLocalStorage).toHaveBeenCalledWith("token", mockAccessToken);

    // Fetching the token from local storage
    fetchLocalStorage.mockReturnValue(mockAccessToken);

    const tokenFromLocalStorage = fetchLocalStorage("token");

    // Asserting that the token was fetched correctly from localStorage
    expect(tokenFromLocalStorage).toEqual(mockAccessToken);
  });
});
