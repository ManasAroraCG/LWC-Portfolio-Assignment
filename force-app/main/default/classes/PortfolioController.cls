public with sharing class PortfolioController {

    @AuraEnabled(cacheable=true)
    public static Account getPortfolioData() {

        return [
            SELECT Id,
                   Name,
                   Full_Name__c,
                   Professional_Title__c,
                   About_Me__c,
                   Skills__c,
                   Portfolio_Email__c,
                   Portfolio_Phone__c,
                   LinkedIn_URL__c,
                   GitHub_URL__c,
                   Profile_Image_URL__c
            FROM Account
            WHERE Name = 'Manas Arora Portfolio'
            LIMIT 1
        ];
    }
}