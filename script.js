$(window).on('load', function () {    
    if ($('#preloader').length) {      
        $('#preloader').delay(100).fadeOut('slow', function () {        
            $(this).remove();      
        });    
    }
});


$('#btn1').click(function(){

    $.ajax({
        url: 'server.php',
        type: 'POST',
        data: {
            button:'1'
        },
        dataType: 'json',

        success: function(result){
            console.log(result);
            if(result.status.name == "ok"){
                $('#result').html(function(){ 
                    $return = ""
                        for($i = 0; $i < 3; $i++){
                            $return+= "Magnitude: " + result['data'][$i]['magnitude'] + ' ' +
                            "Date and time: " + result['data'][$i]['datetime']+"<br>"
                        }
                        return $return;
                    }
                )           
            }
        },
        error:  function(jqXHR, textStatus, errorThrown){
            alert(textStatus);
        }
    })
})

$('#btn2').click(function(){

    $.ajax({
        url: 'server.php',
        type: 'POST',
        data: {
            button:'2'
        },
        dataType: 'json',
        success: function(result){
            console.log(result);
            if(result.status.name == "ok"){
                $('#result').html("Country code: " + result['data']['countryCode'] + "<br>")
                $('#result').append("Station Name: " + result['data']['stationName']  + "<br>")
                $('#result').append("Temperature: " + result['data']['temperature'] + "<br>") 
                $('#result').append("Humidity: " + result['data']['humidity'])        
            }
        },
        error:  function(jqXHR, textStatus, errorThrown){
            alert(errorThrown);
        }
    })
})

$('#btn3').click(function(){

    $.ajax({
        url: 'server.php',
        type: 'POST',
        data: {
            button:'3'
        },
        dataType: 'json',

        success: function(result){
            console.log(result);
            if(result.status.name == "ok"){
                $('#result').html("Country: " + result['data']['countryName'] + "<br>")
                $('#result').append("Current time: " + result['data']['time']  + "<br>")
                $('#result').append("Sunrise: " + result['data']['sunrise'] + "<br>")
                $('#result').append("Sunset: " + result['data']['sunset'])
            }
        },
        error:  function(jqXHR, textStatus, errorThrown){
            alert(errorThrown);
        }
    })
})

