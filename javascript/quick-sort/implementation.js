
function swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function partition(A, p, r) {
    const pivot = A[r];
    let i = p - 1;
    for (let j = p; j < r; j++) {
        if (A[j] <= pivot) {
            i++;
            swap(A, i, j);
        }
    }
    swap(A, i + 1, r);
    return i + 1;
}


function quickSort(A, p, r) {
    if (p < r) {
        const q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

module.exports = quickSort;
