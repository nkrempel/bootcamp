window.onload = startTime;
 function startTime() {
    let today = new Date();
    //let currentTime = h + ":" + m + ":" + s;
    //console.log(currentTime);
    let currentTime = today.toLocaleTimeString('en-US')
    let myTime = React.createElement("h1", null, currentTime)
    ReactDOM.render(myTime, document.getElementById('time'));
}

setInterval(startTime, 1000);

