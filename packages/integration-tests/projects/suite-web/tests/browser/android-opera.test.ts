// @beta
// @user-agent=Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/28.2725; U; ru) Presto/2.8.119 Version/11.10

// note that running tests in /browser folder will not work in 'debug local setup'

describe('Android with Opera-mini browser ', () => {
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