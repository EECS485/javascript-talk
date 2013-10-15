
// attempt to clairfy how "this" works

function whatsThis() { 
    this.coffee = "gone";
    console.log(this); // print our "owner"
};

whatsThis(); // what do we get?

//new whatsThis(); // hmm?