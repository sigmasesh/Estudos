import SignupPage from '../pages/SignupPage'

describe('Cadastro', ()=>{
    it('Seja um entregador', ()=>{
      

        var entregador = {
            nome: 'Fernando Papito',
            cpf: '00000014141',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',   
            endereco:{
                cep:'04534011',
                rua:'Rua Joaquim Floriano',
                numero:'1000',  
                complemento:'Ap 142',  
                bairro:'Itaim Bibi',    
                cidade_uf:'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh:'cnh.jpg'
        }

        var signup = new SignupPage()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'


        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)


      





    })

    it('CPF Inválido', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]')
            .click()
        
        cy.get('#page-deliver form h1')
            .should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Fernando Papito',
            cpf: '00000014141a',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',   
            endereco:{
                cep:'04534011',
                rua:'Rua Joaquim Floriano',
                numero:'1000',  
                complemento:'Ap 142',  
                bairro:'Itaim Bibi',    
                cidade_uf:'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh:'cnh.jpg'
        }

        cy.get('input[name="name"]')
            .type(entregador.nome)
        cy.get('input[name="cpf"]')
            .type(entregador.cpf)
        cy.get('input[name="email"]')
            .type(entregador.email)
        cy.get('input[name="whatsapp"]')
            .type(entregador.whatsapp)

        cy.get('input[name="postalcode"]')
            .type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]')
            .click()
        cy.get('input[name="address-number"]')
            .type(entregador.endereco.numero)
        cy.get('input[name="address-details"]')
            .type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega)
            .click()

        cy.get('input[accept^="image"]').attachFile(entregador.cnh)

        cy.get('form button[type="submit"]')
            .click()

        cy.get('.alert-error').
            should('have.text', 'Oops! CPF inválido')



    })
});