
/// <reference types="cypress" />
const or = require('../../../locators/training_locators.json');
export default class OfficeTrainingPageElements{
    
    ///প্রশিক্ষণ তথ্য

    trainingField(){
        return cy.get(or.officeTrainings.trainingInformation.training)
    }

    trainingTitleField(){
        return cy.get(or.officeTrainings.trainingInformation.trainingTitle)
    }

    trainingTypeField(){
        return cy.get(or.officeTrainings.trainingInformation.trainingType)
    }

    courseTypeField(){
        return cy.get(or.officeTrainings.trainingInformation.courseType)
    }

    selectCheckboxCourseTypeField(){
        return cy.get(or.officeTrainings.trainingInformation.selectCheckboxCourseType)
    }

    trainingInstituteField(){
        return cy.get(or.officeTrainings.trainingInformation.trainingInstitute)
    }

    sessionTypeField(){
        return cy.get(or.officeTrainings.trainingInformation.sessionType)
    }

    batchNoField(){
        return cy.get(or.officeTrainings.trainingInformation.batchNo)
    }

    placeField(){
        return cy.get(or.officeTrainings.trainingInformation.place)
    }

    countryTrainingField(){
        return cy.get(or.officeTrainings.trainingInformation.countryTraining)
    }

    addressField(){
        return cy.get(or.officeTrainings.trainingInformation.address)
    }

    descField(){
        return cy.get(or.officeTrainings.trainingInformation.desc)
    }

    tagField(){
        return cy.get(or.officeTrainings.trainingInformation.tag)
    }

    expectedSkillsAcquiredThroughTrainingField(){
        return cy.get(or.officeTrainings.trainingInformation.expectedSkillsAcquiredThroughTraining)
    }

    selectSkillField(){
        return cy.get(or.officeTrainings.trainingInformation.selectSkill)
    }

    trainingStartDateField(){
        return cy.get(or.officeTrainings.trainingInformation.trainingStartDate)
    }

    trainingEndDateField(){
        return cy.get(or.officeTrainings.trainingInformation.trainingEndDate)
    }

    selectTrainingEndDateField(){
        return cy.get(or.officeTrainings.trainingInformation.selectTrainingEndDate)
    }

    mustTraineesParticipateField(){
        return cy.get(or.officeTrainings.trainingInformation.mustTraineesParticipate)
    }

    mediumTrainingCallField(){
        return cy.get(or.officeTrainings.trainingInformation.mediumTrainingCall)
    }


    //সময়সূচী
    dateField(){
        return cy.get(or.officeTrainings.schedule.date)
    }

    startHHField(){
        return cy.get(or.officeTrainings.schedule.startHH)
    }

    startMMField(){
        return cy.get(or.officeTrainings.schedule.startMM)
    }

    startperiodField(){
        return cy.get(or.officeTrainings.schedule.startperiod)
    }


    endHHField(){
        return cy.get(or.officeTrainings.schedule.endHH)
    }

    endMMField(){
        return cy.get(or.officeTrainings.schedule.endMM)
    }

    endPeriodField(){
        return cy.get(or.officeTrainings.schedule.endPeriod)
    }

    ///সংযুক্তি আপলোডকরণ

    fileField(){
        return cy.get(or.officeTrainings.attachmentUpload.file)
    }


    ///মনোনয়নের জন্য আহ্বান

    officeField(){
        return cy.get(or.officeTrainings.callforNominations.office)
    }

    participantCountField(){
        return cy.get(or.officeTrainings.callforNominations.participantCount)
    }

    nominationdateField(){
        return cy.get(or.officeTrainings.callforNominations.date)
    }

    commentField(){
        return cy.get(or.officeTrainings.callforNominations.comment)
    }
    


    
}