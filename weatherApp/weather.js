// document.getElementById('button').addEventListener('click', (e) => {
//     let enteredCity = document.getElementsByName("enteredCity")[0].value;
//     const promise = axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + enteredCity + '&&appid=9104d23c4a09bca4b22c0445ffb95be3&&units=Imperial');
//     console.log(promise);
//     console.log(enteredCity)
// })

window.onload = function() {
	document.getElementById('button').addEventListener('click', (e) => {
        let enteredCity = document.getElementsByName("enteredCity")[0].value;
        let form = document.getElementsByClassName("radioGroup")[0].value;
        const promise = axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + enteredCity + '&&appid=9104d23c4a09bca4b22c0445ffb95be3&&units=' + form)
            .then(response => {
                    document.getElementsByClassName("city")[0].innerHTML = "Currently in " + response.data.name + " it";
                    document.getElementsByClassName("weather")[0].innerHTML = "&nbspis&nbsp" + Math.floor(response.data.main.temp) + " degrees.";
            })
            .catch(error => {
                    document.getElementsByClassName("city")[0].innerHTML = "There was an error, please try again"
                
            })
        console.log(form);
        // console.log(enteredCity);  
        })
}