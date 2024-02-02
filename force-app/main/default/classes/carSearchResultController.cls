public with sharing class carSearchResultController {
    @AuraEnabled(cacheable=true)
    public static List<Car__c> getCars( String carTypeId){
        if(String.isEmpty(carTypeId))
        {
            return [
                SELECT Id, Name, Picture__c, Contact__r.Name , 
                Geolocation__latitude__s , Geolocation__longtitude__s
                FROM  Car__c 
                WHERE Available_For_Rent__c	= True 
            ];
        }
        else{
            return [
                SELECT Id, Name, Picture__c, Contact__r.Name , 
                Geolocation__latitude__s , Geolocation__longtitude__s
                FROM  Car__c 
                WHERE Available_For_Rent__c	= True 
                AND Car_Type__c = : carTypeId 
            ];
        }
    } 
}