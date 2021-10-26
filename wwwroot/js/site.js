
const btnPayWithCard = $("#btn-pay-with-card");
const divPayWithCard = $("#credit-form");
const btnPayWithAccount = $("#btn-pay-with-account");
const divPayWithAccount = $("#account-form");
const btnSavedCard = $("#btn-saved-card");
const divSavedCard = $("#saved-card");
const btnNewCard = $("#btn-new-card");
const divNewCard = $("#new-card");

$(document).ready(function () {

    $('.checked').change(function () {

        // let rowNumber = parseInt($(this).attr("rownum"))
        // console.log(rowNumber)

        let total = 0;
        let numberOfItems = 0;
        let percentfee = 0;
        let overalltotal = 0;

        //Get all the rows of the table
        let tableRows = $('.data-row')

        for (let row of tableRows) {
            // console.log(row)
            if ($(row).find('input').is(":checked")) {
                // console.log($(row).find('.ad').text())
                let rowAmountDue = parseInt($(row).find('.ad').text())

                total += rowAmountDue
                numberOfItems++
                percentfee = total * 0.03
                overalltotal = total + percentfee

            }
        }
        $('#numberOfItemsDisplay').text("Invoices Selected: " + numberOfItems)
        $('#tpa').text("Total Payment Amount: " + `$${total.toFixed(2)}`)
        $('#numberOfItemsSelected').text(numberOfItems)
        $('#ipa').text(`$${total.toFixed(2)}`)
        $('#mpa').text("Total Payment Amount: " + `$${total.toFixed(2)}`)
        $('#percentfee').text(`$${percentfee.toFixed(2)}`)
        $('#overalltotal').text(`$${overalltotal.toFixed(2)}`)

    })


    // Using id to click the bars icon. Added class to css to allow toggling
    $("#side-bars-icon").click(function () {
        $("#container-top-nav").toggleClass("mobile-container--hidden")
    })

    // var a = $('.it-1').val();
    // var b = $('.it-2').val();
    // var c = $('.it-3').val();
    // var d = $('.it-4').val();
    // var e = $('.it-5').val();
    // var f = $('.ad-1').val();
    // var g = $('.ad-2').val();
    // var h = $('.ad-3').val();
    // var i = $('.ad-4').val();
    // var j = $('.ad-5').val();
    //
    //
    // $('.checked').click(function()
    // var k = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f)
    // parseInt(g) + parseInt(h) + parseInt(i) + parseInt(j);
    // $('#tpa').val(c);
    //     alert(c);
    // });



    btnPayWithCard.click(function () {
        // Adding active class to card-tab button
        $("#card-tab").addClass("active");
        // Removing active class from account-tab button
        $("#account-tab").removeClass("active");
        divPayWithCard.show();
        divPayWithAccount.hide();
    })

    btnPayWithAccount.click(function () {
        $("#account-tab").addClass("active");
        $("#card-tab").removeClass("active");
        divPayWithAccount.show();
        divPayWithCard.hide();
    })

    btnSavedCard.click(function () {
        btnSavedCard.addClass("active");
        btnNewCard.removeClass("active");
        divSavedCard.show();
        divNewCard.hide();
    })

    btnNewCard.click(function () {
        btnNewCard.addClass("active");
        btnSavedCard.removeClass("active");
        divNewCard.show();
        divSavedCard.hide();
    })

    // $(document).ready(function()
    // {
    //     $('table thead th').each(function(i)
    //     {
    //         // calculateColumn(i);
    //     });
    // });

    // function calculateColumn(index)
    // {
    // $("#myTable tbody tr").click(function(){
    // alert("hi");
    // });

    //     var tpa = 0;
    //     $('table tr').each(function()
    //     {
    //         var value = parseInt($('td', this).eq(index).text());
    //         if (!isNaN(value))
    //         {
    //             total += value;
    //         }
    //     });
    //
    //     $('table tfoot td').eq(index).text('Total: ' + tpa);
    // }

    $("#form-switch").click(function () {
        $("#btn-pay-with-taxid").toggle();
        $("#btn-pay-with-ssn").toggle();
    });

    // $("#show").click(function(){
    //   $("p").show();
    // });

    // if($("#form-switch").is(':checked'))
    //     $("#btn-pay-with-tax_id").show();  // checked
    // else
    //     $("#btn-pay-with-tax_id").hide();  // uncheckedx

    // function is_socialSecurity_Number(str)
    // {
    //  regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
    //
    //         if (regexp.test(str))
    //           {
    //             return true;
    //           }
    //         else
    //           {
    //             return false;
    //           }
    // }

});

