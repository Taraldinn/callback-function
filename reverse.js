function reverseString(str) {
    var reverse="";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse=reverse+char;
    }
    return reverse
}

var statement="hello alien my brother"
var forAlien =reverseString(statement);
console.log(forAlien)
