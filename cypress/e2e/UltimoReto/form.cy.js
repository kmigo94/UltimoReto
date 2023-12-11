describe('Formulario', () => {
  it('debe llenar el formulario', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    // Datos personales
    cy.get('#firstName').type('Camila');
    cy.get('#lastName').type('Gomez');
    cy.get('#userEmail').type('emailtest@gmail.com');
    cy.get('.custom-radio:nth-child(2) > .custom-control-label').click();
    cy.get('#userNumber').type('3113214567');
    //Aserciones
    cy.get('#firstName').should('have.value','Camila');
    cy.get('#lastName').should('have.value','Gomez');
    cy.get('#userEmail').should('have.value','emailtest@gmail.com');
    cy.get('#userNumber').should('have.value','3113214567');

    // Fecha de naciemiento
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('December');
    cy.get('.react-datepicker__year-select').select('1994');
    cy.get('.react-datepicker__day--002:nth-child(6)').click();

    // Seleccionar materias
    cy.get('subjects-auto-complete__control css-yk16xz-control').type('Math').click();
    cy.get('#react-select-2-option-0').click();
    cy.get('#react-select-2-option-2').click();

    // Seleccionar hobbies
    cy.get('.custom-checkbox:nth-child(3) > .custom-control-label').click();
    cy.get('.custom-checkbox:nth-child(2) > .custom-control-label').click();

    // Cargar imagen
    const fileName = 'Test.svg.png';
    cy.fixture(fileName).then(() => {
      cy.get('#uploadPicture').selectFile('C:/Users/mruiz/Downloads/Test.svg.png');
    });

    // Llenar direccion
    cy.get('#currentAddress').type('test address 123');

    //asercion
    cy.get('#currentAddress').should('have.value','test address 123');

    // Seleccionar ciudad y estado
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    // Subir formulario
    cy.get('#submit').click();
  });
});