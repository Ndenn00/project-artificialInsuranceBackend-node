var moment = require('moment');

module.exports = {
    
    returnsOne: function (){
        return 1; 
    },

    basePrice: function(){
        return 400;
    },

    differenceInYears: function(date){
        var years = moment().diff(date, 'years', false);
        
        return years;
    }

}

   
    



