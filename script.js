$(document).ready(function () {

    const apiKey = config.SECRET_API_KEY

    $('#submit-weather').on('click', function (event) {
        event.preventDefault()
        const city = $("#city").val();
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`,
            method: "GET",
            success: function (data) {
                const widget = show(data);
                $(".content").html(widget);
                $("#city").val('');
                getUVIndex(data.coord.lat, data.coord.lon)
            },
        });
    });

    function getUVIndex(lat, lon) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`,
            method: "GET",
            success: function (data) {
                const UVIndex = "<p>UV Index: " + data.value + "</p>"
                $('.content').append(UVIndex)
            },
        })
    };

    // function fiveDayForecast() {
    //     $.ajax({
    //         url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`,
    //         method: "GET",
    //         success: function (data) {
    //             const UVIndex = "<p>UV Index: " + data.value + "</p>"
    //             $('.five-day-goes-here').append(UVIndex)
    //         },
    //     })
    // };

    function show(data) {
        return "<h1>" + data.name + "<img class='image is-48x48' src= https://openweathermap.org/img/w/" + data.weather[0].icon + ".png>" + "</h1>" +
            "<p>Temperature: " + data.main.temp + "&deg;F</p>" +
            "<p>Humidity: " + data.main.humidity + "%</p>" +
            "<p>Wind Speed: " + data.wind.speed + " MPH</p>"
    }

});





