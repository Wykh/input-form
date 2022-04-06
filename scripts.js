$(document).ready(function () {

    $('form').on('submit', function () {

        let name = $('form name');
        let phone = $('form phone');
        let email = $('form email');

        // JS validation
        const regexRuName = /[А-Яа-я-]+/;
        const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // TODO: дописать js валидацию!

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
