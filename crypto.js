var letters = "acdegilmnoprstuw",
    H = 7;
var hash = function (s) {
        var i, h = H;
        for (i = 0; i < s.length; i++) {
            h = h * 37 + letters.indexOf(s[i]);
        }
        return h;
    };

function isInt(n) {
    return n % 1 === 0;
}

function iterate(currentH, i) {
    var h = (currentH - i) / 37;
    if (isInt(h)) {
        if (h > H) {
            return iterate(h, letters.length - 1) + letters[i];
        } else if (h == H) {
            return letters[i];
        } else { // h < H
            return "";
        }
    } else {
        return iterate(currentH, --i);
    }
}
var inverse = function (h) {
        return iterate(h, letters.length - 1);
    };
exports.hash = hash;
exports.inverse = inverse;
