<?php
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    if($_REQUEST['button'] =='1'){
        
        $url='http://api.geonames.org/earthquakesJSON?north=50.1&south=-19.9&east=-12.4&west=45.2&username=sofiacoelho';
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);
        curl_close($ch);
    
            $decode = json_decode($result, true);
            $output['status']['code'] = "200";
            $output['status']['name'] = "ok";
            $output['status']['description'] = "mission saved";
            $output['data'] = $decode['earthquakes']; 
    }

    if($_REQUEST['button'] =='2'){
            
        $url='http://api.geonames.org/findNearByWeatherJSON?lat=-41.20&lng=174.89&username=sofiacoelho';
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);
        curl_close($ch);
    
            $decode = json_decode($result, true);
            $output['status']['code'] = "200";
            $output['status']['name'] = "ok";
            $output['status']['description'] = "mission saved";
            $output['data'] = $decode['weatherObservation']; 
    }

    if($_REQUEST['button'] =='3'){   
       
        $url='http://api.geonames.org/timezoneJSON?lat=-41.20&lng=174.89&username=sofiacoelho';
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);
        curl_close($ch);
    
            $decode = json_decode($result, true);
            $output['status']['code'] = "200";
            $output['status']['name'] = "ok";
            $output['status']['description'] = "mission saved";
            $output['data'] = $decode;
    }

    header('Content-Type: application/json; charset-UTF-8');
    echo json_encode($output);
?>