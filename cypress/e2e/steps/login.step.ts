import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login,page";

Given ("I open orange hrm page {string}", (enviroment: string) => {
    cy.visit(`${Cypress.env(enviroment).baseURL}/web/index.php/auth/login`)
});

When ("Enter credential succesfully", () => {
    LoginPage.loginCredential();
});