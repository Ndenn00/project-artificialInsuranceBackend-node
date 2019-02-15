var dateUtility = require('../utility/dateUtility')
var moment = require('moment');

module.exports = {

    basePrice: function(){
        return 400;
    },

    ageCalculation: function(birthDate, basePrice){
        var age = dateUtility.differenceInYears(birthDate); 
        if(age >= 17 && age <= 25){
            return Math.round(basePrice*=1.1);
        } 
        if(age >= 26 && age <= 60){
            return Math.round(basePrice*=1.05);
        }
        if(age >= 61 && age <= 80){
            return 440;
        }
        if(age > 80){
            throw new Error("Age not accepted")
        }
        return basePrice;
    },
    
    
        drivingExperienceCalculation: function(drivingExperienceInYears, basePrice){
            if(drivingExperienceInYears >= 0 && drivingExperienceInYears <= 5){
                return Math.round(basePrice*=1.1);
            } 

            if(drivingExperienceInYears >= 6 && drivingExperienceInYears <= 30){
                return Math.round(basePrice*=1.05);
            } 

            if(drivingExperienceInYears >= 31 && drivingExperienceInYears <= 44){
                return Math.round(basePrice*=1.01);
            } 

            if(drivingExperienceInYears >= 45){
                return Math.round(basePrice*=1.05);
            } 
    }, 
    vinCalculation: function(vinNumber){
        
        if(vinNumber.charAt(vinNumber.length-1).toUpperCase() == 'J'){
            return 50; 
        }
        return 0; 
    }, 

    accidentWithinSixYears: function(accidentOccured){
        if(accidentOccured){
            return 50;
        }; 
        return 0; 
    }
    
}

   
    



