export const endingResolver = (num) => {
    switch (true) {
        case ([2, 6, 7, 8].includes(num % 10) && (num < 10 || num > 20)):
            return 'ой';
        case ([3].includes(num % 10) && (num < 10 || num > 20)):
            return 'ий';
        default:
            return 'ый';
    }
};
