// ------- Passing Test
// describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(true)
//     })
//   })

// ------- Failing Test
//   describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(false)
//     })
//   })

// ------- Writing Test to visit URL
// describe('My First Test', function() {
//     it('Visits the Kitchen Sink', function() {
//       cy.visit('https://example.cypress.io')
//     })
//   })

// ------- First Assertion
// (Includes Visit, Contains, Click, URL, Should, Get, Type)
describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('http://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', 'commands/actions')

        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
})

describe('My Second Test', () => {
    it('Clicks a different link', () => {
        cy.visit('http://example.cypress.io')
        cy.contains('scrollTo').click()
        cy.url().should('include', 'commands/actions')
        cy.get('#description')
            .type('Adding text to this field')
            .should('have.value', 'Adding text to this field')

        cy.get('#couponCode1')
            .type('Promo Code')
            .should('have.value', 'Promo Code')

        cy.get('.action-form > .btn').click()
        
        cy.get('.well > p')
            
    
    })
})
