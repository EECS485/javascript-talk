
// inherit via prototypes

function BaseObj(input) { 
    this.name = input;
}

function SubObj() { 
    this.hi = function() {
        return "Hi, " + this.name;
    };
}

SubObj.prototype = new BaseObj("otto");
var obj = new SubObj();

console.log("obj:       ", obj);
console.log("SubObj.proto:  ", SubObj.prototype);
console.log("obj.hi():  ", obj.hi());
console.log("test:      ", obj.name === SubObj.prototype.name);

