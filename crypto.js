var hash = function (s) {
        var h = 7,
            i, 
            letters = "acdegilmnoprstuw";
        for (i = 0; i < s.length; i++) {
            h = h * 37 + letters.indexOf(s[i]);
        }
        return h;
    };
exports.hash = hash;
