
// todo: stubbing user agents, needs to be done in cypress.run options. I am working on this in another PR
describe('Browser ', () => {
    beforeEach(() => {
        cy.viewport(1024, 768).resetDb();
        cy.task('stopEmu');
    });

    it('Outdated browser', () => {});
    
    it('No webusb support mobile browser', () => {});

    it('On mobile chrome, install bridge and udev rules shall NOT appear', () => {
        cy.prefixedVisit('/');
        cy.passThroughInitialRun();
    })
})