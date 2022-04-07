$(document).ready(function () {

    $('form').on('submit', function () {

        let name = $('form input[name=name]');
        let phone = $('form input[name=phone]');
        let email = $('form input[name=email]');

        // JS validation
        const regexRuName = /^[А-Яа-я-ёЁ]+$/;
        const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (name.val().match(regexRuName) === null) {
            alert('WTF! Use only russian symbols');
        }
        else if(phone.val().match(regexPhone) === null) {
            alert('WTF! Invalid phone format');
        }
        else if(email.val().match(regexEmail) === null) {
            alert('WTF! Invalid email format');
        }
        else {
            let data = {
                name: name.val(),
                phone: phone.val(),
                email: email.val()
            };
            
            $.ajax({
                type: 'POST',
                url: 'https://60376bfd5435040017722533.mockapi.io/form',
                data: data,
                success: function (data, status, xhr) {
                    alert(`Succes! \nMessage: "${data.text}". \nStatus ${xhr.status}`);
                    name.val(''); 
                    phone.val(''); 
                    email.val(''); 
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(`ERROR ${xhr.status}. ${xhr.responseText}`);
                    console.log(ajaxOptions);
                    console.log(thrownError);
                }
            });
        }
        return false;

    });
});
