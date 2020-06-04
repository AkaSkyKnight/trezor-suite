// @beta
// @user-agent=Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36

describe('Windows 7 with outdated chrome ', () => {
    before(() => {
        cy.task('stopEmu');
        cy.viewport(1024, 768);
        cy.resetDb();
    });

    it('Should just display outdated browser', () => {
        cy.prefixedVisit('/');
        cy.get('html').should('contain.text', 'No webUSB support');
    });
})