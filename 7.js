
// uber simple closure

function close(i) {  
    return function() {
        return ++i;
    }
}

var b = close(0);

console.log(b(), b(), b(), b()); // whats this print?