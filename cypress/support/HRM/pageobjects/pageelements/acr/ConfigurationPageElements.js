
/// <reference types="cypress" />
const or = require('../../../locators/acr_locators.json')
const common = require('../../../locators/common_locators.json')
export default class ConfigurationPageElements{
 
    branchField(){
        return cy.get(common.GlobalLocator.branchField)
    }

}