// @beta
// @user-agent=Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19

describe('Android with chrome browser ', () => {
    before(() => {
        cy.viewport(1024, 768)
        cy.resetDb();
    });

    it('On mobile chrome, install bridge and udev rules shall NOT appear but apart from that, app works with webusb', () => {
        cy.prefixedVisit('/');
        cy.passThroughInitialRun();
        cy.getTestElement('@webusb-button').should('be.visible');
    })
})