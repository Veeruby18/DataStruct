function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}


function checkOrthogonality(vectors1, vectors2) {
    for (let i = 0; i < vectors1.length; i++) {
        const v1 = vectors1[i];
        const v2 = vectors2[i];
        const product = dot_product(v1, v2);
        if (product === 0) {
            console.log(`Pair ${i + 1} is orthogonal.`);
        } else {
            console.log(`Pair ${i + 1} is not orthogonal.`);
        }
    }
}


const vectors1 = [
    [1, 2, 3],
    [1, 0, 0],
    [2, -1, 0]
];
const vectors2 = [
    [4, -8, 4],
    [0, 1, 0],
    [1, 2, 0]
];

checkOrthogonality(vectors1, vectors2);