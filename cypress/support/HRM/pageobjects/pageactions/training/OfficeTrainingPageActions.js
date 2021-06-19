/// <reference types="cypress" />

import OfficeTrainingPageElements from '../../pageelements/training/OfficeTrainingPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class OfficeTrainingPageActions{

    constructor(){

        globalThis.officeTrainingpageelement = new OfficeTrainingPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    trainingInformation(training,trainingTitle,trainingType,trainingInstitute,courseType,sessionType,batchNo,countryTraining,address,desc,tag,skill,trainingEndDate,tabBtnSelector){
           
            //ওয়ার্কশপ/ সেমিনার/ প্রশিক্ষণ 
            officeTrainingpageelement.trainingField().click()
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(training).click()
            cy.wait(1000)

            officeTrainingpageelement.trainingTitleField().type(trainingTitle).should('have.value', trainingTitle)
            cy.wait(1000)

            officeTrainingpageelement.trainingTypeField().click()
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(trainingType).click()
            cy.wait(1000)

            officeTrainingpageelement.courseTypeField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(courseType).click()
            cy.wait(1000)

            officeTrainingpageelement.trainingInstituteField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(trainingInstitute).click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.sessionTypeField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(sessionType).click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.batchNoField().click({force: true}).type(batchNo).should('have.value', batchNo)
            cy.wait(1000)

            officeTrainingpageelement.placeField().click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.countryTrainingField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(countryTraining).click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.addressField().click({force: true}).type(address).should('have.value', address)
            cy.wait(1000)

            officeTrainingpageelement.descField().click({force: true}).type(desc).should('have.value', desc)
            cy.wait(1000)

            officeTrainingpageelement.tagField().click({force: true}).type(tag).should('have.value', tag)
            cy.wait(1000)

            officeTrainingpageelement.expectedSkillsAcquiredThroughTrainingField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(skill).click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.trainingStartDateField().click({force: true})
            cy.wait(1000)
            commonpageelement.getCurrentDate().click({force: true})
            cy.wait(1000)
            officeTrainingpageelement.trainingEndDateField().click({force: true})
            cy.wait(1000)
            commonpageelement.getCurrentDate().click({force: true})
            cy.wait(1000)
            // commonpageelement.DropdownItem().contains(trainingEndDate).click({force: true})
            // cy.wait(1000)

            officeTrainingpageelement.mustTraineesParticipateField().click({force: true})
            cy.wait(1000)
            officeTrainingpageelement.mediumTrainingCallField().click({force: true})
            cy.wait(1000)

        }

    scheduleDetails(startHH,startMM,startPeriod,endHH,endMM,endPeriod,saveBtnSelector){
            officeTrainingpageelement.dateField().click({force: true})
            cy.wait(1000)
            commonpageelement.getCurrentDate().click({force: true})
            cy.wait(1000)
            //value bangla english conflict that's why should have value not use
            officeTrainingpageelement.startHHField().type(startHH)
            cy.wait(1000)
            officeTrainingpageelement.startMMField().type(startMM)
            cy.wait(1000)

            officeTrainingpageelement.startperiodField().click({force: true})
            cy.wait(1000)
            commonpageelement.AMorPMDropDown().contains(startPeriod).click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.endHHField().type(endHH)
            cy.wait(1000)
            officeTrainingpageelement.endMMField().type(endMM)
            cy.wait(1000)

            officeTrainingpageelement.endPeriodField().click({force: true})
            cy.wait(1000)
            commonpageelement.AMorPMDropDown().contains(endPeriod).click({force: true})
            cy.wait(1000)

            //saveBtn
            commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})

        }

        attachmentUploadDetails(file,desc,saveBtnSelector){
            officeTrainingpageelement.fileField().type(file).should('have.value', file)
            cy.wait(1000)
            commonpageelement.attachementDescField().type(desc).should('have.value', desc)
            cy.wait(1000)
            const fileName = 'test.jpeg'
            commonpageelement.attachementUploadField().attachFile(fileName)
            cy.wait(1000)

             //saveBtn
            commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})
        }

        callforNominationsDetails(office,participantCount,comment,saveBtnSelector,completeBtnSelector){

            officeTrainingpageelement.officeField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(office).click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.participantCountField().type(participantCount).should('have.value', participantCount)
            cy.wait(1000)
            officeTrainingpageelement.nominationdateField().click({force: true})
            cy.wait(1000)
            commonpageelement.getCurrentDate().click({force: true})
            cy.wait(1000)

            officeTrainingpageelement.commentField().type(comment).should('have.value', comment)
            cy.wait(1000)
            //saveBtn
            commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})
            cy.wait(1000)
            //সম্পন্ন করুন
            commonpageelement.getCompleteBtn(completeBtnSelector).click({force: true})
            cy.wait(1000)
            
        }

    //চূড়ান্ত অংশগ্রহণকারী তালিকা >  অন্যান্য প্রশিক্ষণার্থী যুক্তকরণ
    // add Participant
     addParticipantDetails(name){
        
        cy.get("mat-dialog-container:visible tr td:nth-child(2)").each(($el,index, $list)=> {

            let employeeNameText = $el.text()
            if(employeeNameText.includes(name)){
                cy.get("mat-dialog-container:visible tr td:nth-child(2)").eq(index).prev().find(".mat-checkbox-layout .mat-checkbox-inner-container").click()
            }
        })
        cy.wait(2000)

     }


     //আমন্ত্রণ ও মনোনয়ন >অংশগ্রহণকারী বাছাই 
     //add Participant selection
     ParticipantSelectionDetails(name){
        
        cy.get("mat-dialog-container mat-row mat-cell:nth-child(2)").each(($el,index, $list)=> {

            let employeeNameText = $el.text()
            if(employeeNameText.includes(name)){
                cy.get("mat-dialog-container mat-row mat-cell:nth-child(2)").eq(index).prev().find(".mat-checkbox-layout .mat-checkbox-inner-container").click()
            }
        })
        cy.wait(2000)

     }
}