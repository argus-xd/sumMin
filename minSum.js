const sum = arr => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer);
};

const isNumber = get => {
    return !isNaN(get);
};

module.exports = getArrNumber = array => {
    if (typeof array == "string") {
        if (isNumber(array)) {
            array = [parseFloat(array)];
        } else return "Not Number";
    }

    if (!array || array.length <= 1) {
        return array && array[0] ? array[0] : 0;
    }

    let minFirst;
    let minSecond;

    minFirst = array[0] > array[1] ? array[1] : array[0];
    minSecond = array[0] > array[1] ? array[0] : array[1];

    for (let i = 0; i < array.length; i++) {
        save = minFirst;
        if (array[i] < minFirst) {
            minFirst = array[i];
        }
        if (save < minSecond && save != minFirst) {
            minSecond = save;
        }
    }

    return sum([minFirst, minSecond]);
};
