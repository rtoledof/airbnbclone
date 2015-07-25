$(function () {
    var now = new Date();
    $(".ui-datepicker-target").datepicker({
        dateFormat: "yy-mm-dd",
        currentText: "Now",
        minDate: now,
        prevText: "",
        nextText: ""
    });
    var checkoutSelector = $("#checkout");
    var checkinSelector = $("#checkin");
    var numberOfGuestsSelector = $("#number_of_guests");
    var priceInputSelector = $('input[name="booking-price"]');
    var formCheckoutDateElement = $('input[name="booking-checkout-date"]');
    var formCheckinDateElement = $('input[name="booking-checkin-date"]');
    var formGuestsElement = $('input[name="booking-guests"]');
    var currCheckinValue;
    var currCheckoutValue;
    checkinSelector
        .change(function () {
            currCheckinValue = checkinSelector.datepicker("getDate");
            currCheckoutValue = checkoutSelector.datepicker("getDate");
            if (currCheckoutValue - currCheckinValue < 0) {
                currCheckinValue.setDate(currCheckinValue.getDate() + 1);
                checkoutSelector.datepicker('setDate', currCheckinValue);
            }
            calculatePrice(
                checkinSelector.datepicker("getDate"),
                checkoutSelector.datepicker("getDate"),
                numberOfGuestsSelector.val(),
                priceInputSelector.val()
            );
            formCheckinDateElement.val($.datepicker.formatDate('yy-mm-dd', checkinSelector.datepicker("getDate")));
        })
    ;
    checkoutSelector
        .change(function () {
            currCheckinValue = checkinSelector.datepicker("getDate");
            currCheckoutValue = checkoutSelector.datepicker("getDate");
            if (currCheckoutValue - currCheckinValue < 0) {
                currCheckoutValue.setDate(currCheckoutValue.getDate() - 1);
                checkinSelector.datepicker('setDate', currCheckoutValue);
            }
            calculatePrice(
                checkinSelector.datepicker("getDate"),
                checkoutSelector.datepicker("getDate"),
                numberOfGuestsSelector.val(),
                priceInputSelector.val()
            );
            formCheckoutDateElement.val($.datepicker.formatDate('yy-mm-dd', checkoutSelector.datepicker("getDate")));
        })
    ;

    numberOfGuestsSelector.change(function () {
            calculatePrice(
                checkinSelector.datepicker("getDate"),
                checkoutSelector.datepicker("getDate"),
                numberOfGuestsSelector.val(),
                priceInputSelector.val()
            );
            formGuestsElement.val(numberOfGuestsSelector.val());
        }
    );

    $(document).mouseup(function (e) {
        if (!$(".modal.show").length) {
            return;
        }
        var container = $(".panel-padding.panel-body");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".modal.show").removeClass("show").addClass("hide");
        }
    });

    $("#start-booking").click(function (e) {
        $(".modal").removeClass("hide").addClass("show");
        e.preventDefault();
    });

    $('#lightGallery').lightGallery({
        addClass: 'showThumbByDefault',
        loop: true,
        mode: "slide",
        useCSS: true,
        cssEasing: "ease",
        thumbnail: true,
        showThumbByDefault: true,
        animateThumb: false
    });

    $("#submit_location").click(function () {
        $(".searchbar__input-wrapper").addClass("loading");
    });

    $(".icon-remove").click(function () {
        $(this).closest("li.removable").remove();
    });

    $("a.expandable-trigger-more").click(function () {
        $(this).closest(".expandable").addClass('expandable-trigger-more expanded');
        return false;
    });
});


function calculatePrice(checkinDate, checkoutDate, guestsCount, price) {
    $(".js-book-it-status").addClass('loading');
    sendToCalculator(checkinDate, checkoutDate, guestsCount, price, showResult);
}

function showResult(result) {
    $("#price_night_cell").text(result.pricePerNight);
    $('input[name="booking-price"]').val(result.pricePerNight);
    $("#night_count_cell").text(result.nightsCount);
    $("#total_cell").text(result.total);
}

function addCalculationError(errorText) {
    var errorsContainer = $(".js-book-it-status").find('ul.err');
    if (errorsContainer.length) {
        errorsContainer.append('<li>' + errorText + '</li>');
    }
}

function prepareCalculationErrorsBlock() {
    var bookingContainer = $(".js-book-it-status");
    var bookingFormSelector = bookingContainer.find(".js-book-it-enabled:visible");
    if (bookingFormSelector.length) {
        bookingFormSelector.addClass('hide');
    }
    var errorsContainer = bookingContainer.find('ul.err');
    if (!errorsContainer.length) {
        errorsContainer = $('<ul class="err"></ul>');
        bookingContainer.append(errorsContainer);
    }
}

function showCalculationForm() {
    var bookingContainer = $(".js-book-it-status");
    var bookingFormSelector = bookingContainer.find(".js-book-it-enabled");
    if (bookingFormSelector.length && !bookingFormSelector.is("visible")) {
        bookingFormSelector.show();
    }
}

function removeCalculationErrors() {
    var errorsContainer = $(".js-book-it-status").find('ul.err');
    if (errorsContainer.length) {
        errorsContainer.remove();
    }
}

function sendToCalculator(checkinDate, checkoutDate, guestsCount, price, callBackResult) {
    removeCalculationErrors();
    var msg = '';
    if (!checkinDate instanceof Date) {
        msg = "Check in date has a wrong format";
        prepareCalculationErrorsBlock();
        addCalculationError(msg);
        throw msg;
    }
    if (!checkoutDate instanceof Date) {
        msg = "Check out date has a wrong format";
        prepareCalculationErrorsBlock();
        addCalculationError(msg);
        throw msg;
    }
    if (isNaN(parseInt(guestsCount)) || !parseInt(guestsCount)) {
        guestsCount = 1;
    }
    var checkinDateString = $.datepicker.formatDate('yy-mm-dd', checkinDate);
    var checkoutDateString = $.datepicker.formatDate('yy-mm-dd', checkoutDate);
    var calcUrl = "/calculate/" + guestsCount + "/" + checkinDateString + "/" + checkoutDateString + "/" + price;
    $.getJSON(calcUrl, function (data) {
        $(".js-book-it-status").removeClass('loading');
        if (data.errors) {
            prepareCalculationErrorsBlock();
            for (var index = 0; index < data.errors.length; ++index) {
                addCalculationError(data.errors[index]);
            }
        }
        else {
            showCalculationForm();
            callBackResult(data);
        }
    });

}
