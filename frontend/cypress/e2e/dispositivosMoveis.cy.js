// describe('Testando dispositivos móveis', () => {
//     it('Deve existir um menu burguer', () => {
//         cy.visit('/')
        
//         cy.getByData('botao-login').click()
//         cy.getByData('email-input').type('neilton@alura.com')
//         cy.getByData('senha-input').type('123456')
//         cy.getByData('botao-enviar').click()
        
//         cy.location('pathname').should('eq','/home')

//         cy.getByData('menu-burguer').click()
//         cy.getByData('menu-lateral').find('a').eq(3).click()			

//         cy.location('pathname').should('eq','/home/investimentos')			
//     })
// })

describe('Menu de navegação', () => {
    context('Resolução de 720p', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
    })
    it('Deve existir um menu normal no caso de viewport de computadores', () => {

        
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        
        cy.location('pathname').should('eq','/home')

        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist')		

        cy.location('pathname').should('eq','/home/cartoes')			
    })
})

context('Resolução do iphone 5', () => {
    beforeEach(() => {
        cy.viewport('iphone-5')
        cy.visit('/')
    })

    it('Deve existir um menu normal no caso de viewport de computadores', () => {

        
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        
        cy.location('pathname').should('eq','/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()			

        cy.location('pathname').should('eq','/home/investimentos')			
    })

})

context('Resolução do iphone 6', () => {
    beforeEach(() => {
        cy.viewport('iphone-6')
        cy.visit('/')
    })

    it('Deve existir um menu normal no caso de viewport de celular na horizontal', () => {

        
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        
        cy.location('pathname').should('eq','/home')

        cy.viewport('iphone-6', 'landscape')

        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist')		

        cy.location('pathname').should('eq','/home/cartoes')		
    })

})

})