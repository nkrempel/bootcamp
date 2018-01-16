function fib() {
    var arr = [0, 1];
    
    function nacci() {
        console.log(arr[arr.length-1]);
        var nacci = arr[arr.length - 1],
            len = arr.length;
        arr.push(arr[len - 1] + arr[len - 2]);
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  