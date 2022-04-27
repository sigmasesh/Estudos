it('teste', function(){
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href*="/deliver"]')
        .should('be.visible')
        .click()

    cy.get('input[placeholder="Nome completo"]')
        .type('João Silva Correia')

    cy.get('input[placeholder="CPF somente números"]')
        .type('435.353.075-36')

    cy.get('input[placeholder="E-mail"]')
        .type('joaosilva024@gmail.com')

    cy.get('input[placeholder="Whatsapp"]')
        .type('98572-0052')

    cy.get('input[placeholder="CEP"]') 
        .type('06529016')

    cy.get('input[value="Buscar CEP"]')
        .click()

    cy.get('input[placeholder="Número"]')  
        .type('26')

    cy.get('input[placeholder="Complemento"]')
        .type('casa')

    const metodos = [
        'Moto',  
        'Bicicleta',
        'Van/Carro' 
    ]

    metodos.forEach(function(m){
        cy.get(`img[alt="${m}"]`)
        .click()
    })

    const imageFile = 'C:/teste/cypress/CNH.jpg'

    cy.get('.dropzone input')
        .selectFile(imageFile, {force: true})

    cy.get('button[class="button-success"]')
        .click()



})
