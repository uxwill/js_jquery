//alert("here"); //testing
$(document).ready(function() {


 	var hour = new Date().getHours();
       //hasClass, removeClass and addClass are JQuery objects
       if (hour > 18 || hour < 6) {
            $('#orb').removeClass('sun').addClass('moon');
            $('#sky').removeClass('day').addClass('night');
        }
        else {
            $('#orb').removeClass('moon').addClass('sun');
            $('#sky').removeClass('night').addClass('day');
        }
 ;
});

