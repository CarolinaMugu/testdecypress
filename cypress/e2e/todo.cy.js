describe('Agregar tareas', () => {
    it('Agregar una tarea a la lista', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
        cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')
    })   

    it('Marcar tarea como completada', () => {  
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('[data-testid="text-input"]').type("Tarea2{enter}")
        cy.get('[data-testid="todo-item-toggle"]').first().check()
    })


it('Desmarcar tarea completada', () => {  
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("tarea3{enter}")
    cy.get('[data-testid="todo-item-toggle"]').first().check()
    cy.get('[data-testid="todo-item-toggle"]').uncheck()  
})

it('Editar tarea', () => {  
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("tarea4{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.focused().clear().type("Chocolate {enter}")
}) 

it('Borrar tarea', () => {  
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("tarea5{enter}")
    cy.get('[data-testid="todo-item-toggle"]').first().check()
    cy.get('.clear-completed').click()
})

it.only('Filtrar tareas', () => {  
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("tarea6{enter}")
    cy.get('[data-testid="text-input"]').type("tarea7{enter}")
    cy.get('[data-testid="text-input"]').type("tarea8{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').first().check()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').first().check()
    cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > a').click()
})

})