// $(document).ready(function () {
//     $('#property').click(function () {
//         $('.propertytype').prop('checked', this.checked);
//     });
//     $(".propertytype").click(function () {
//         if ($(".propertytype:checked").length != 0) {
//             $('#property').prop('checked', "checked");
//         }
//         else {
//             $("#property").prop("checked", false);
//         }
//     });
//     $('#testimonial').click(function () {
//         $('.testimonialtype').prop('checked', this.checked);
//     });
//     $(".testimonialtype").click(function () {
//         if ($(".testimonialtype:checked").length != 0) {
//             $('#testimonial').prop('checked', "checked");
//         }
//         else {
//             $("#testimonial").prop("checked", false);
//         }
//     });
//     $('#users').click(function () {
//         $('.userstype').prop('checked', this.checked);
//     });
//     $(".userstype").click(function () {
//         if ($(".userstype:checked").length != 0) {
//             $('#users').prop('checked', "checked");
//         }
//         else {
//             $("#users").prop("checked", false);
//         }
//     });
//     $('#membership').click(function () {
//         $('.membershiptype').prop('checked', this.checked);
//     });
//     $(".membershiptype").click(function () {
//         if ($(".membershiptype:checked").length != 0) {
//             $('#membership').prop('checked', "checked");
//         }
//         else {
//             $("#membership").prop("checked", false);
//         }
//     });
// })
// $(document).ready(function(){
//      $('#property').click(function () {
//         $('.propertytype').prop('checked', this.checked);
//     });
//     $(".propertytype").click(function () {
//         if ($(".propertytype:checked").length != 0) {
//             $('#property').prop('checked', "checked");
//         }
//         else {
//             $("#property").prop("checked", false);
//         }
//     });
// })
$(document).ready(function () {
    $('input[type=checkbox]').click(function () {
        $(this).parent().find('li input[type=checkbox]').prop('checked', $(this).is(':checked'));
        var sibs = false;
        $(this).closest('ul').children('li').each(function () {
            if ($('input[type=checkbox]', this).is(':checked')) sibs = true;
        })
        $(this).parents('ul').prev().prop('checked', sibs);
    });
})
