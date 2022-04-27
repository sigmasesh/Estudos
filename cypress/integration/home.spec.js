describe('pagina inicial', () => {
    it('o app deve estar online', ()=>{
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1')
            .should('have.text', 'Seja um parceiro entregador pela Buger Eats')

        cy.get('#page-home main p')
            .should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
    })
})
