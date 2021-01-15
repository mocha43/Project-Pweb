$(document).ready(function () {
    $(".profile").on('click', function () {
        $.getJSON("list-destinasi.json", function (obj) {
            $.each(obj, function (key, value) {

                console.log(obj);
                // $("ul").append("<li>" + value.nama, value.email, value.hp + "</li><br>");

                $("#destinasi")
                    .append($('<div class="image"><img src="' + value.img + '" alt=""><p class="date">  ' + value.judul + '</p><p>' + value.deskripsi + '</p></div> <hr>'))

            });

        });
    });
});