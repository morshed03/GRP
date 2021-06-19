/// <reference types="cypress" />

import MyTrainingPageElements from '../../pageelements/training/MyTrainingPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class MyTrainingPageActions{

    constructor(){

        globalThis.myTrainingpageelement = new MyTrainingPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }
    

    updateInfoDetails(expirationDate,duration,durationUnit,divisionGrade,acheivedNumber,acheivedPosition){


        myTrainingpageelement.expirationDateField().click({force: true})
        cy.wait(1000)
        commonpageelement.getCurrentDate().click({force: true})
        cy.wait(1000)
        // commonpageelement.DropdownItem().contains(expirationDate).click({force: true})
        // cy.wait(1000)

        myTrainingpageelement.durationField().type(duration).should('have.value', duration)
        cy.wait(1000)

        myTrainingpageelement.durationUnitField().click({force: true})
        cy.wait(1000)

        commonpageelement.DropdownItem().contains(durationUnit).click({force: true})
        cy.wait(1000)


        myTrainingpageelement.divisionGradeField().click({force: true})
        cy.wait(1000)

        commonpageelement.DropdownItem().contains(divisionGrade).click({force: true})
        cy.wait(1000)

        myTrainingpageelement.acheivedNumberField().type(acheivedNumber).should('have.value', acheivedNumber)
        cy.wait(1000)

        myTrainingpageelement.acheivedPositionField().type(acheivedPosition).should('have.value', acheivedPosition)
        cy.wait(1000)

        myTrainingpageelement.radioBtnField().click({force: true})
        cy.wait(1000)
    }

    

}