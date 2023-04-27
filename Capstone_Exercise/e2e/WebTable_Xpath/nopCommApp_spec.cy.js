


describe('NOP Comm App', function(){

  it('Perform Action on LinkText', ()=> {


      cy.visit('https://de.nopcommerce.com/')


      cy.CustomMethodClickOnLink('Apple MacBook Pro 13-inch')

      cy.url().should('eq', 'https://de.nopcommerce.com/apple-macBook-pro-13-inch')
  })


})