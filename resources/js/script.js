$(document).ready(function(){
    $('.section-offer').waypoint(function(direction){
        if(direction=='down'){
            $('.navigacija').addClass('sticky');
        }else{
            $('.navigacija').removeClass('sticky');
        }

    }, {
        offset:'60px'
    });

});