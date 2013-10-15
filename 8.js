
// simple design overview

function Person(n,a,g) {

    this.name = n;
    this.age = a;
    this.gender = g;
    this.friends = [];

    this.becomeFriend = function(friend) {
        this.friends.push(friend);
        friend.friends.push(this);
    }

    this.showFriends = function() {
        console.log(this.name + "'s friends:")
        for (var i in this.friends)
            console.log(this.friends[i]);
    }
}

// somewhere else ...

var otto = new Person("otto", 22, "M");
var sam = new Person("sam", 22, "M");

otto.becomeFriend(sam); // whats this do?
otto.showFriends();
sam.showFriends();

// add methods after the fact
otto.giveTalk = function() {
    console.log("JS! Blah blah!");
};

otto.giveTalk();









