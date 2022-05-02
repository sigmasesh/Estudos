class acoes {


    acesso() {

        const computador = 'Computador Mancer Gamer Érebo, AMD Ryzen 9 5900X, GeForce RTX 3080 Ti 12GB, 16GB DDR4, SSD 960GB'
        const valor = 'R$ 26.591,00'


        cy.visit('https://www.pichau.com.br/')
        cy.get('button').contains('Departamentos').should('be.visible').click()
        cy.get('a[href="/computadores"]').click()
        cy.get('span').contains('Computadores Gamer').click()
        cy.get('div').contains('Relevância').click()
        cy.get('div').contains('Maior valor').click()
        cy.get('a[href="/computador-mancer-gamer-erebo-amd-ryzen-9-5900x-geforce-rtx-3080-ti-12gb-16gb-ddr4-ssd-960gb-31748"]').click()
        cy.get('h1[data-cy="product-page-title"]').should('have.text', computador)
        cy.get('span').contains('Produto Disponível')
        cy.get('button').contains('Comprar').click()
        cy.get('span[class="text-dark d-inline-block align-middle"]').should('have.text', computador)
        cy.get('td p[class="MuiTypography-root MuiTypography-h5"]').contains(valor)
        cy.get('a[href="/checkout"]').contains('Finalizar Pedido').click()

    }

    login(email, senha) {
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
    }

    submit() {
        cy.get('button[data-cy="login-submit"]')
            .click()
    }

    dados(cep, nome, sobrenome, rua, bairro, estado, cidade, numerocel, numero) {
        cy.get('input[name="firstname"]').should('have.value', nome)
        cy.get('input[name="lastname"]').should('have.value', sobrenome)
        cy.get('input[name="postcode"]').type(cep)
        cy.get('input[name="street"]').should('have.value', rua)
        cy.get('input[name="neighborhood"]').should('have.value', bairro)
        cy.get('#mui-component-select-region_id').contains(estado)
        cy.get('input[name="city"]').should('have.value', cidade)
        cy.get('input[name="telephone"]').type(numerocel)
        cy.get('input[name="number"]').type(numero)
    }

    confirmar() {
        cy.get('input[type="checkbox"]').click()
        cy.get('button').contains('Salvar Endereço').click()
    }

    metododeenvio() {
        cy.get('input[value="intelipost_603__intelipost"]').click()
    }
    
    confirmarenvio() {
        cy.get('button[data-cy="address-continue-to-payment"]').click()
    }

    cartao(numerocartao, cvv, mes, ano, nome,cpf){
        cy.get('input[value="mercadopago_custom"]').click()
        cy.get('input[name="ccnumber"]').type(numerocartao)
        cy.get('input[name="cvv"]').type(cvv)
        cy.get('select[name="month"]').select(mes).should('have.value', '11')
        cy.get('select[name="year"]').select(ano).should('have.value', '2027')
        cy.get('input[name="name"]').type(nome)
        cy.get('input[name="taxvat"]').type(cpf)
    }

    removerendereco(){
        cy.get('strong a[href="/account"]').click()
        cy.get('li').contains('Minha Conta')
        cy.get('a[href="/account/address"] button').click()
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary MuiButton-textSizeSmall MuiButton-sizeSmall"]')
            .click({ multiple: true })
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall"]')
            .click()
         cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall"]')
            .click()
    }

    

    resetarcarrinho(){
        cy.get('a[href="/cart"] button').click()
        cy.get('span').contains('Carrinho').click()
        cy.get('div[style="text-align: right;"] button').click()
        cy.get('span').contains('Confirmar').click()
    }

        

    logout(){
        cy.get('a[href="/logout"]').click()
    }
}


export default new acoes();