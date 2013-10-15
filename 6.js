
// tale of two loops
 
function cb(i) {
    // non-interesting callback
    console.log(i);
}

for (var i = 0; i < 10; i++) {

    setTimeout(function() {
        cb(i); 
    }, 1000); // simulate long time
}


for (var i = 0; i < 10; i++) {
    (function(i) { // iife
        setTimeout(function() {
            cb(i);
        }, 1000);
    })(i);
}
