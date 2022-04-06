$(document).ready(function () {

    $('form').on('submit', function () {

        var name = $('form name');
        var phone = $('form phone');
        var email = $('form email');
        var data = {
            name: name.val(),
            phone: phone.val(),
            email: email.val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://60376bfd5435040017722533.mockapi.io/form',
            data: data,
            success: function (data) {
                //do something with the data via front-end framework
                alert('Succes!');
                location.reload();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(`ERROR ${xhr.status}. ${xhr.responseText}`);
            }
        });
        return false;

    });
});
