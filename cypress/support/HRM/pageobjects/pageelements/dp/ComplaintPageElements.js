
/// <reference types="cypress" />
const or = require('../../../locators/dp_locators.json');
export default class ComplaintPageElements{
     

    branchTypeField(){
        return cy.get(or.complaintPage.employeeSearch.Branch)
        // 
    }
    
    employeeTypeField(){
        return cy.get(or.complaintPage.employeeSearch.employee)
        // 
    }

    // General-Info
    complainTypeField(){
        return cy.get(or.complaintPage.complaintGeneralInfo.complaintType)
    }

    complaintBasisField(){
        return cy.get(or.complaintPage.complaintGeneralInfo.complaintBasis)
    }
    
    complaintTitleField(){
        return cy.get(or.complaintPage.complaintGeneralInfo.complaintTitle)
    }
    allegationDateField(){
        return cy.get(or.complaintPage.complaintGeneralInfo.allegationDate)
    }
    complaintDateField(){
        return cy.get(or.complaintPage.complaintGeneralInfo.complaintDate)
    }
    allegationNoField(){
        return cy.get(or.complaintPage.complaintGeneralInfo.allegationNo)
    }

    dPAuthorityDesignateField(){
        return cy.get(or.complaintPage.complaintGeneralInfo.dpAuthorityDesignate)
    }
    
    allegationDescription2Field(){
        return cy.get(or.complaintPage.complaintGeneralInfo.allegationDescription2)
    }
    
    orderTabField(){
        return cy.get(or.complaintPage.order.orderTab)
    }

    ///orderInfo
    orderDateField(){
        return cy.get(or.complaintPage.order.orderInfo.orderDate)
    }

    selectorderDateField(){
        return cy.get(or.complaintPage.order.orderInfo.selectorderDate)
    }

    orderTypeField(){
        return cy.get(or.complaintPage.order.orderInfo.orderType)
    }

    orderDetailsField(){
        return cy.get(or.complaintPage.order.orderInfo.orderDetails)
    }

    actionDetailsField(){
        return cy.get(or.complaintPage.order.orderInfo.actionDetails)
    }

    punishmentNatureField(){
        return cy.get(or.complaintPage.order.orderInfo.punishmentNature)
    }

    punishmentTypeField(){
        return cy.get(or.complaintPage.order.orderInfo.punishmentType)
    }

    selectEmployeeForApprovedField(){
        return cy.get(or.complaintPage.order.orderEdit.selectEmployeeForApproved)
    }

   
}