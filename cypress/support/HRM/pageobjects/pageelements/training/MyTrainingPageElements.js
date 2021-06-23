
/// <reference types="cypress" />
const or = require('../../../locators/training_locators.json');
export default class MyTrainingPageElements{
    
    ///নিজ প্রশিক্ষণ

    expirationDateField(){
        return cy.get(or.myTraining.updateInfo.expirationDate)
    }

    durationField(){
        return cy.get(or.myTraining.updateInfo.duration)
    }

    durationUnitField(){
        return cy.get(or.myTraining.updateInfo.durationUnit)
    }

    divisionGradeField(){
        return cy.get(or.myTraining.updateInfo.divisionGrade)
    }

    acheivedNumberField(){
        return cy.get(or.myTraining.updateInfo.acheivedNumber)
    }

    acheivedPositionField(){
        return cy.get(or.myTraining.updateInfo.acheivedPosition)
    }

    radioBtnField(){
        return cy.get(or.myTraining.updateInfo.radioBtn)
    }
 
}