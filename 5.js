
// simulate async call (like a web request to an API)

function main (data, callback) {
                                            //print order
    console.log("we're in main");           //1
    setTimeout(function() {
        callback("done");                   //4
    }, 300); // no "actual" waiting here

    console.log(data);                      //2
}

main("arg", function(out) {
    console.log("we're in the callback");   //3
    console.log(out);
});

