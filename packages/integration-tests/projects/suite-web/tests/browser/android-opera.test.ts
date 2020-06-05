// @beta
// @user-agent=Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36

// note that running tests in /browser folder will not work in 'debug local setup'

describe('Android with Firefox browser', () => {
    before(() => {
        cy.task('stopEmu');
        cy.viewport('samsung-s10');
        cy.resetDb();
    });

    it('Should display "Get Chrome for Android"', () => {
        cy.prefixedVisit('/');
        cy.get('body').should('contain.text', 'Get Chrome for Android');
        cy.screenshot();
    })
})