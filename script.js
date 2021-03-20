$(document).ready(function(){
    // Displays date of current day at top of the page
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // Loads any saved data from localStorage to 
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));

    // Same as eventListener, listens for save button 'click'
    $('.saveButton').on('click', function(){
        var details = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // Saves values into localStorage
        localStorage.setItem(time, details)
    });

    updateHour();
    
    // Function that checks whether the task is either past, present, or future
    function updateHour(){
        // Gathers the current hour
        var currentHour = moment().hours();

        // Like a for loop that goes thru each schedule row
        $('.row').each(function(){
            // Gathers the id representing the hour
            var plannerHour = parseInt($(this).attr('id'));
            
            // If statement that determines if task is either past, present, or future
            if(plannerHour < currentHour){
                console.log(plannerHour < currentHour);
                $(this).addClass('past');
            } 
            else if(plannerHour === currentHour){
                console.log(10);
                $(this).removeClass('past');
                $(this).addClass('present');
            } 
            else{
                console.log(plannerHour === currentHour);
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }
});