function genPassword(len, lowercase, uppercase, numbers, symbols) {
    if (len < 1) {
        return "Password length cannot be less than 1.";
    }
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var nums = "1234567890";
    var symbolChars = "!@#$%&*?-_=+~/|<>.,:;";
    var passwd = "";
    var allowed = "";
    allowed += numbers ? nums : "";
    allowed += symbols ? symbolChars : "";
    allowed += lowercase ? chars : "";
    allowed += uppercase ? chars.toUpperCase() : "";
    if (allowed.length === 0) {
        return "No characters selected.";
    }
    for (var i = 0; i < len; i++) {
        var randIdx = Math.floor(Math.random() * allowed.length);
        passwd += allowed[randIdx];
    }
    return passwd;
}
var len = 15;
var lowercase = true;
var uppercase = true;
var numbers = true;
var symbols = true;
var password = genPassword(len, lowercase, uppercase, numbers, symbols);
console.log("Your password is: \t ".concat(password));
