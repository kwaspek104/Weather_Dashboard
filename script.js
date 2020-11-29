$(document).ready(function () {

    $('#submitWeather').click(function () {
        var city = $("#city").val();

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=a1714656806d3c4da922178094aa251a",
            method: "GET",
            success: function (data) {
                console.log(data);
                var widget = show(data);
                $(".content").html(widget);
                $("#city").val('');
            },
        });
    
    });

function show(data) {
    return "<h1> <img class='image is-48x48' src= https://openweathermap.org/img/w/" + data.weather[0].icon + ".png>" + data.name + "</h1>" +
        "<p>Temperature: " + data.main.temp + "</p>" +
        "<p>Humidity: " + data.main.humidity + "</p>" +
        "<p>Wind Speed: " + data.wind.speed + "</p>"
}

});


    
   

