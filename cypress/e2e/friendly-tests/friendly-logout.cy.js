// So since the localStorage.removeItem("name", "token"); is in one line in editBtn.js, this test will fail.
// It will only remove "name" from localStorage and not "token".
// This is reported as a bug in editBtn.js to issues tab on GitHub.

describe("Logout", () => {
  beforeEach(() => {
    cy.clearLocalStorage(); // Clear localStorage before each test
  });

  it("should log out and successfully remove token from localStorage", () => {
    cy.visit("/"); // Adjust the URL as needed

    // Fill in the email and password fields with valid credentials
    cy.get("#email").type("friendlye2etest@stud.noroff.no");
    cy.get("#Password").type("friendlye2etest");

    // Click the login button
    cy.get("form#log-in").submit();

    // Check if a token is present in localStorage
    cy.window().its("localStorage.token").should("exist");

    // After successful login, navigate to the profile page
    cy.visit("/profile/index.html"); // Adjust the URL as needed

    // Add assertions to check if the profile page is accessible
    cy.url().should("include", "/profile");

    // Check if the "Edit" dropdown button exists and click it
    cy.get(".btn.dropdown-toggle").contains("Edit").should("exist").click();

    // Check if the "Log Out" link exists within the dropdown and click it
    cy.get(".dropdown-menu .dropdown-item:contains('Log Out')").should("exist").click();

    // Check if the token is removed from localStorage after logging out
    cy.window().its("localStorage.token").should("not.exist");
  });
});
