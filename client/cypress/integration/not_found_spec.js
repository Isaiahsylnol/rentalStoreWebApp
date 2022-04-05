beforeEach(() => {
    cy.visit('http://localhost:3000/')
  
  })

describe("Home page should render with welcome text", function (){
    it('GETS, type and assert', function () {
        cy.contains("Home")
    })
})

describe("Header functionality", function (){
    it('header should render with clickable links', function () {

        cy.get("[data-cy=nav_links]:contains(a)").each($a => {
            const message = $a.text();
           // console.log(message)
            expect(message).not.to.be.empty
          }); 
    
    }) 
})

describe("404 page test", function (){
    beforeEach(() => {
        cy.visit('http://localhost:3000/dog')
      })
    
    it('404 page should render with link to Home', function () {
        cy.contains("404")
        cy.get("[data-cy=return_home]")
            .should('have.text', 'Go Home')
            .should('have.attr', 'href')
            .and('match', /home/)
    })

    it('Can use link to navigate back to Home', function (){
        cy.get("[data-cy=return_home]").click()
    })
    })
    

