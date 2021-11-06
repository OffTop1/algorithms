function countingSort(a, m) {
    const c = new Array(m).fill(0);
    const b = new Array(a.length);

    for (let i = 0; i < a.length; i++) c[a[i]]++;
    for (let i = 1; i < c.length; i++) c[i] = c[i] + c[i - 1];
    for (let i = a.length - 1; i >= 0; i--) {
        b[c[a[i]] - 1] = a[i];
        c[a[i]]--;
    }
    return b;
} 

module.exports = {
    countingSort
};