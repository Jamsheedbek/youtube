const RandomDate = () => {
    Array.prototype.random = function (length) {
        return this[Math.floor(Math.random() * length)];
    };
    const a = Math.round(Math.random() * 50);
    if (a <= 7) {
        let arr = ['day', 'month', 'year', 'week'];
        return String(a) + ' ' + arr.random(arr.length);
    } else if (a > 7 && a <= 31) {
        let arr = ['day', 'month', 'year'];
        return String(a) + ' ' + arr.random(arr.length);
    } else if (a > 31) {
        let arr = ['month', 'year'];
        return String(a) + ' ' + arr.random(arr.length);
    }
};

export default RandomDate;
