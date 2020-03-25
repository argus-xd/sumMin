const sum = arr => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer);
};

isNumber = get => {
    return !isNaN(get);
};

module.exports = getArr = get => {
    if (typeof get == "string") {
        if (isNumber(get)) {
            get = [parseFloat(get)];
        } else return "Not Number";
    }

    if (!get || get.length <= 1) {
        return get && get[0] ? get[0] : 0;
    }

    let minFirst;
    let minSecond;

    minFirst = get[0] > get[1] ? get[1] : get[0];
    minSecond = get[0] > get[1] ? get[0] : get[1];

    for (let i = 0; i < get.length; i++) {
        save = minFirst;
        if (get[i] < minFirst) {
            minFirst = get[i];
        }
        if (save < minSecond && save != minFirst) {
            minSecond = save;
        }
    }

    return sum([minFirst, minSecond]);
};
