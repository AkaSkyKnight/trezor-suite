// @beta
// @user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1

// const GalaxyNexusChromeUA = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';

describe('iPhone with chrome browser ', () => {
    before(() => {
        cy.viewport(1024, 768)
        cy.resetDb();
    });

    it('There is no way to connect trezor to iPhone at the moment', () => {
        cy.get('html').should('contain.text', 'No webUSB support');
    });

    // it('On mobile chrome, install bridge and udev rules shall NOT appear', () => {
    //     cy.prefixedVisit('/');
    //     cy.passThroughInitialRun();
    // })
})