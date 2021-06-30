
/// <reference types="cypress" />
const or = require('../../../locators/joining_locators.json');
export default class JoiningPageElements{
    
        /////নিয়োগ ও যোগদান সংক্রান্ত তথ্যাবলি

        //কর্মচারীর নাম (বাংলা) *
        nameBnField(){
                return cy.get(or.joinAndApprove.joiningDetails.nameBn)
        }

        //কর্মচারীর নাম (ইংরেজি) *
        employeeNameEnField(){
            return cy.get(or.joinAndApprove.joiningDetails.employeeNameEn)
        }

        //জন্ম তারিখ *
        dateOfBirthField(){
            return cy.get(or.joinAndApprove.joiningDetails.dateOfBirth)
        }

        //মোবাইল *
        mobileNoField(){
            return cy.get(or.joinAndApprove.joiningDetails.mobileNo)
        }

        //ইমেইল *
        emailField(){
            return cy.get(or.joinAndApprove.joiningDetails.email)
        }

        //নিয়োগের ধরন *
        recruitmentTypeOidField(){
            return cy.get(or.joinAndApprove.joiningDetails.recruitmentTypeOid)
        }

        //নিয়োগকারী কর্তৃপক্ষ 
        recruitmentAuthorityOidField(){
            return cy.get(or.joinAndApprove.joiningDetails.recruitmentAuthorityOid)
        }

        ///গেজেটেড/ ননগেজেটেড/ অন্যান্য *
        rankTypeField(){
            return cy.get(or.joinAndApprove.joiningDetails.rankType)
        }

        ///ক্যাডার/নন-ক্যাডার/চুক্তিভিত্তিক *
        employmentTypeOidField(){
            return cy.get(or.joinAndApprove.joiningDetails.employmentTypeOid)
        }

        ///চাকরিতে যোগদানের তারিখ *
        joiningDateField(){
            return cy.get(or.joinAndApprove.joiningDetails.joiningDate)
        }

        ///শাখা *
        branchField(){
            return cy.get(or.joinAndApprove.joiningDetails.branch)
        }

        ///পদ (শুন্য) *
        positionField(){
            return cy.get(or.joinAndApprove.joiningDetails.position)
        }

        ///বর্তমান পদে যোগদানের তারিখ *
        joiningDateForPostField(){
            return cy.get(or.joinAndApprove.joiningDetails.joiningDateForPost)
        }

        ///not Required

        ///নিয়োগ বিজ্ঞপ্তির রেফারেন্স নম্বর
        recruitmentNoticeRefNoField(){
            return cy.get(or.joinAndApprove.joiningDetails.recruitmentNoticeRefNo)
        }

        ///নিয়োগ বিজ্ঞপ্তির তারিখ
        recruitmentNoticeRefDateField(){
            return cy.get(or.joinAndApprove.joiningDetails.recruitmentNoticeRefDate)
        }

        ///মেধাক্রম
        meritPositionField(){
            return cy.get(or.joinAndApprove.joiningDetails.meritPosition)
        }

        ///বিবরণ
        descriptionField(){
            return cy.get(or.joinAndApprove.joiningDetails.description2)
        }
}