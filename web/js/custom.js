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
    var priceInputSelector = $('#appbundle_booking_priceString');
    var formCheckoutDateElement = $('#appbundle_booking_checkoutDate');
    var formCheckinDateElement = $('#appbundle_booking_checkinDate');
    var formGuestsElement = $('#appbundle_booking_guestsCount');
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
        $("#booking-form-modal").removeClass("hide").addClass("show");
        e.preventDefault();
    });

    $('#lightGallery').lightGallery({
        addClass: 'showThumbByDefault',
        loop: true,
        mode: "slide",
        useCSS: true,
        cssEasing: "ease",
        thumbnail: true,
        showThumbByDefault: true
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

    var bookingForm = $('#add_booking');
    if (bookingForm.length) {
        bookingForm.ajaxForm({
            'beforeSubmit': function (formData, jqForm, options) {
                $('#appbundle_booking_submit').blur();
                cleanupValidationFormErrors('#add_booking');
            },
            'error': function () {
                addErrorToForm("Booking has failed because of an unknown reason", "#appbundle_booking_checkinDate");
            },
            'success': function (responseText, statusText, xhr, $form) {
                if (xhr.status != 200) {
                    addErrorToForm("Booking has failed because of an unknown reason", "#appbundle_booking_checkinDate");
                }
                if (responseText.success) {
                    $("#booking-form-modal").removeClass("show").addClass("hide");
                    showFlash('You\'ve successfully booked this room');
                    cleanupForm("#add_booking");
                    return;
                }
                if (responseText.errors) {
                    var errors = responseText.errors;
                    for (var fieldSelector in errors) {
                        if (errors.hasOwnProperty(fieldSelector)) {
                            addErrorToForm(errors[fieldSelector], "#appbundle_booking_" + fieldSelector);
                        }
                    }
                }
            }
        });
    }

    $('.alert-close').click(function () {
        hideFlash();
    });

    $(document).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.subnav-container').removeClass('hide');
        }
        else {
            $('.subnav-container').addClass('hide');
        }
    });

    $(document).find('.tooltip').addClass('hide');

    $("#show-option").tooltip({
        show: {
            effect: "slideDown",
            delay: 250
        }
    });
    //
    //$(document).tooltip({
    //    position: {
    //        my: "center bottom-5",
    //        at: "center top"
    //    }
    //});
});


function cleanupForm(formSelector) {
    if ($(formSelector).length) {
        $(formSelector).find('input').val('');
    }
}

function hideFlash() {
    $(".flash-container").hide().find("#flash-text-block").text('');
}

function showFlash(message) {
    var flashBlock = $('.flash-container');
    flashBlock.find('#flash-text-block').text(message);
    flashBlock.removeClass('hide');
    flashBlock.slideToggle(500);
    setTimeout(hideFlash, 3000);
}

function calculatePrice(checkinDate, checkoutDate, guestsCount, price) {
    $(".js-book-it-status").addClass('loading');
    sendToCalculator(checkinDate, checkoutDate, guestsCount, price, showResult);
}

function showResult(result) {
    $("#price_night_cell").text(result.pricePerNight);
    $('#appbundle_booking_priceString').val(result.pricePerNight);
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

function addErrorToForm(errorText, selector) {
    if (!$(selector).length) {
        selector = '#appbundle_booking_checkinDate';
    }
    var errorContainer = '<div class="label label-warning inline-error">' + errorText + '</div>';
    $(errorContainer).insertBefore($(selector).parent(), null);
    $(selector).addClass('invalid');
    return true;
}

function cleanupValidationFormErrors(formSelector) {
    if (!$(formSelector).length) {
        return false;
    }
    $(formSelector).find('.inline-error').remove();
    $(formSelector).find('.invalid').removeClass('invalid');
}
