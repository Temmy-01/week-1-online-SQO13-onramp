function countTruthy(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 0 ) {
            result.push (arr[index])
        }
    } return result.length

}
console.log(countTruthy([6, 3, 0, 30, 7]));
console.log(countTruthy(['', 3, 0, 30, 7]));
console.log(countTruthy(['', 0, 0, undefined, 7]));

module.exports = countTruthy


