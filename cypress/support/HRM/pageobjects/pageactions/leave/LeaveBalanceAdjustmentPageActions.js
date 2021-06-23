/// <reference types="cypress" />
import LeaveBalanceAdjustmentPageElements from '../../pageelements/leave/LeaveBalanceAdjustmentPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class LeaveBalanceAdjustmentPageActions{

    constructor(){

        globalThis.leaveBalanceAdjustment = new LeaveBalanceAdjustmentPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    leaveTypenamewithLeaveNumber(name,leaveNumber){
        
        cy.get("mat-dialog-container:visible mat-row mat-cell:nth-child(2)").each(($el,index, $list)=> {

            let employeeNameText = $el.text()
            if(employeeNameText.includes(name)){
                cy.get("mat-dialog-container:visible mat-row mat-cell:nth-child(2)").eq(index).next().next().find("input[type='number']").clear().clear().blur().type(leaveNumber).should('have.value', leaveNumber)
            }
        })
        cy.wait(2000)

     }

     checkDayofLeave(
        name,
        leaveNumber){
            
            cy.get("mat-card-content:visible tr td:nth-child(2)").each(($el,index, $list)=> {

                let employeeNameText = $el.text()
                if(employeeNameText.includes(name)){
                    cy.get("mat-card-content:visible tr td:nth-child(2)").eq(index).next().find("td.mat-cell").contains(leaveNumber).should('have.value', leaveNumber)
                }
            })
            cy.wait(2000)
        }

}