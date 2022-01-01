function StringSimilarity(string_a, string_b) {
    if (typeof(string_a) === "string" && typeof(string_b) === "string") {
        let total = Math.max(string_a.length, string_b.length);
        let count = 0;

        for(let i = 0; i < total; i++) {
            if (string_a[i] === string_b[i]) {
                count++;
            }
        }
        return Math.round((count / total) * 100);
    }else {
        throw TypeError("Argument is not string")
    }
}

exports.StringSimilarity = StringSimilarity;