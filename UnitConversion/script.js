function temperature(){
    //To convert celsius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    //To convert kilos to pounds
    //Weight(Kgs) * 2.2
    var k = document.getElementById("kilo").value;
    var p = k * 2.2
    document.getElementById("pounds").value = p
}


function distance(){
        //To convert kms to mils
    //Distance(Kms) * 0.62137
    let km = document.getElementById("km").value
    let m = km *  0.62137
    document.getElementById("miles").value = m
}
