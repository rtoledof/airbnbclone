$(function() {
    var now = new Date();
    $( ".ui-datepicker-target" ).datepicker({
        dateFormat: "dd-mm-yy",
        currentText: "Now",
        minDate: now,
        prevText: "",
        nextText: ""
    });
    var checkoutSelector =  $("#checkout");
    var checkinSelector = $("#checkin");
    var numberOfGuestsSelector = $("#number_of_guests");
    var currCheckinValue;
    var currCheckoutValue;
    checkinSelector
        .datepicker('setDate', now)
        .change(function(){
            currCheckinValue = checkinSelector.datepicker("getDate");
            currCheckoutValue = checkoutSelector.datepicker("getDate");
            if(currCheckoutValue - currCheckinValue < 0){
                currCheckinValue.setDate(currCheckinValue.getDate() + 1);
                checkoutSelector.datepicker('setDate', currCheckinValue);
            }
            calculatePrice(checkinSelector.datepicker("getDate"), checkoutSelector.datepicker("getDate"), numberOfGuestsSelector.val());
        })
    ;
    checkoutSelector
        .datepicker('setDate', "+1d")
        .change(function(){
            currCheckinValue = checkinSelector.datepicker("getDate");
            currCheckoutValue = checkoutSelector.datepicker("getDate");
            if(currCheckoutValue - currCheckinValue < 0){
                currCheckoutValue.setDate(currCheckoutValue.getDate() - 1);
                checkinSelector.datepicker('setDate', currCheckoutValue);
            }
            calculatePrice(checkinSelector.datepicker("getDate"), checkoutSelector.datepicker("getDate"), numberOfGuestsSelector.val());
        })
    ;

    numberOfGuestsSelector.change(function(){
            calculatePrice(checkinSelector.datepicker("getDate"), checkoutSelector.datepicker("getDate"), numberOfGuestsSelector.val());
        }
    );

    $(document).mouseup(function (e)
    {
        if(!$(".modal.show").length){
            return;
        }
        var container = $(".panel-padding.panel-body");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".modal.show").removeClass("show").addClass("hide");
        }
    });

    $("#start-booking").click(function(e){
        $(".modal").removeClass("hide").addClass("show");
        e.preventDefault();
    });

});


function calculatePrice(checkinDate, checkoutDate, guestsCount)
{
    $(".js-book-it-status").addClass('loading');
    sendToCalculator(checkinDate, checkoutDate, guestsCount, parseResult);

}

function parseResult(result){
    $(".js-book-it-status").removeClass('loading');
    $("#price_night_cell").text(result.pricePerNight);
    $("#night_count_cell").text(result.nightsCount);
    $("#total_cell").text(result.total);
}

function sendToCalculator(checkinDate, checkoutDate, guestsCount, callBackResult)
{
    if(!checkinDate instanceof Date){
        throw "Check in date has a wrong format";
    }
    if(!checkoutDate instanceof Date){
        throw "Check out date has a wrong format";
    }
    if(isNaN(parseInt(guestsCount) ) || !parseInt(guestsCount)){
        guestsCount = 1;
    }
    setTimeout(function(){
        callBackResult({
            "pricePerNight": "€45",
            "nightsCount": "3",
            "total": "€135"
        });
    }, 2000);

}
