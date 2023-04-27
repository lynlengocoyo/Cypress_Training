
//require('@4tw/cypress-drag-drop')


describe('Drag drop', () => {


  it('drag drop', ()=> {

     cy.visit('https://www.dthmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

     cy.get('#box6').should('be visible')
     cy.get('#box106').should('be visible')

     cy.get('#box6')
       .drag('#box106', {force: true})
  })

})