import acoes from '../pages/envio'

describe('fazer a compra de um pc gamer', function(){
    
    Cypress.config('defaultCommandTimeout', 10000);
    
    afterEach(() => {
        cy.get('p').contains('PICHAU INFORMÁTICA® É UMA MARCA REGISTRADA DE BAZAM E PICHAU INFORMATICA LTDA | CNPJ: 09.376.495/0001-22')
        cy.get('address').contains('Avenida Santos Dumont, 7199 - Aventureiro, Joinville - SC - 89226-435')
    });

    it('selecionar o computador', function(){
        acoes.acesso()
    })

    it('logar', function(){
        acoes.login('robson-araujo29@hotmail.com', 'robson123')
    })

    it('confimar endereço', function(){
        acoes.dados('06529016', 'Robson', 'Lopes', 'Rua Lua Nova', 'Jardim do Luar (Fazendinha)', 'Sao Paulo', 'Santana de Parnaíba', '(11)973949394', '26')
        acoes.confirmar()
    })

    it('confirmar envio', function(){
        acoes.metododeenvio()
        acoes.confirmarenvio()
    })

    it('preencher a forma de pagamento', function(){
        acoes.cartao('2322 4242 4242 4242', '554', 'Novembro', '2027', 'Robson Lopes', ' 448.968.188-73')

    })

})

describe('resetar a pagina', function(){
    
    it('zerar o carrinho', function(){
        acoes.resetarcarrinho()
    })
    
    it('remover endereço', function(){
        acoes.removerendereco()
    })

    it('logout', function(){
        acoes.logout()
    })

})

describe('Preço Incoerente', function(){
   
    it('Preço Discrepante', function(){
        acoes.preçoincoerente()
    })
})

describe('Endereço Incoerente', function(){

    it('Rua Discrepante', function(){
        acoes.acesso()
        acoes.login('robson-araujo29@hotmail.com', 'robson123')
        acoes.enderecoincoerente('06529016', 'Robson', 'Lopes', 'Rua Lua Cheia', 'Jardim do Luar (Fazendinha)', 'Sao Paulo', 'Santana de Parnaíba', '(11)973949394', '26')
    })
})



  
