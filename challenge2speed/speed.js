// a function that test speed, where it tells the driver when they overspeed
function speedLimiter(speed){
    if(speed<=70){
        return "Ok";
    }
    else{
        let demerit= Math.floor((speed-70)/5)
        return demerit>12? "License suspended":`Your demerit points are:${demerit}!!`
    }

}
//function where we are link out html id with js
function handleClick(event){
    let speed=parseInt(document.getElementById("speed").value)
    let message=speedLimiter(speed)
    document.getElementById("point").textContent = message
}