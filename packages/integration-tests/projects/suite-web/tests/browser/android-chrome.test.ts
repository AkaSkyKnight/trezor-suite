// @beta
// @user-agent=Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36

// note that running tests in /browser folder will not work in 'debug local setup'

describe('Android with chrome browser ', () => {
    before(() => {
        cy.task('stopEmu');
        cy.viewport('samsung-s10');
        cy.resetDb();
    });

    it('On mobile chrome, install bridge and udev rules shall NOT appear but apart from that, app works with webusb', () => {
        cy.prefixedVisit('/');
        cy.passThroughInitialRun();
        cy.wait(2000);
        cy.getTestElement('@webusb-button').should('be.visible');
    })
})