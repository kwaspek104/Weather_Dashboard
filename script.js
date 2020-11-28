let cityNameEl = $(".cityName");
let tempEl = $(".temp");
let humidityEl = $(".humidity");
let windSpeedEl = $(".windSpeed");
let UVIndexEl = $(".UVIndex");


$(document).ready(function() {

    $('#submitWeather').click(function(){
        var city = $("#city").val();

        
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=a1714656806d3c4da922178094aa251a"
    ,
    type: "GET",
    dataType: "jsonp",
    success: function(data) {
        console.log(data)
    }
});
        

    });

});

function showWeather(data) {
    return
}