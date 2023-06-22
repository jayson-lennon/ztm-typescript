function add(a, b, ...args) {
    let total = a + b;
    for (let n of args) {
        total += n;
    }
    return total;
}

function max(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr.reduce((a, b) => Math.max(a, b));
}

function setCase(message, kind) {
    if (kind === "uppercase") {
        return message.toUpperCase();
    } else if (kind === "lowercase") {
        return message.toLowerCase();
    } else {
        throw new Error("invalid kind: must be 'uppercase' or 'lowercase'");
    }
}

function quote(message) {
    return () => { return `"${message}"` }
}

module.exports = {
    add,
    max,
    quote,
    setCase
}
