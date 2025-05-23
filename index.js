const setOne = [3, 1, 7, 9]
const setTwo = [2, 4, 1, 9, 3]

function sumOfUniqueElements() {
    const allElements = [...setOne, ...setTwo]
    const newSet = {}
    for (let num of allElements) {
        newSet[num] = (newSet[num] || 0) + 1
    }
    let sum = 0
    for (let num in newSet) {
        if (newSet[num] === 1) {
            sum += Number(num)
        }
    }
    return sum
}

console.log(sumOfUniqueElements())