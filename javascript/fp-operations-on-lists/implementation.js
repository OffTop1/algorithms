const reverse = (list) => {
    if (list.length === 1) return list;
    const [first, ...rest] = list;
    return [...reverse(rest), first];
};

console.log(reverse([1, 2, 3, 4, 5]));

const take = (n, list) => {
    if (n < 1) return [];
    const [first, ...rest] = list;
    return [first, ...take(--n, rest)];
};
console.log(take(3, [1, 2, 3, 4, 5]));

const drop = (n, list) => {
    if (n < 1) return list;
    const [_, ...rest] = list;
    return [...drop(--n, rest)];
};

console.log(drop(2, [1, 2, 3, 4, 5]));

const head = (list) => {
    const [hd, ..._] = list;
    return hd;
};

const tail = (list) => {
    const [_, ...tail] = list;
    return tail;
};

const lastof = (list) => {
    if (list.length === 1) return list[0];
    const [_, ...rest] = list;
    return lastof(rest);
};

console.log(lastof([1, 2, 3, 4, 5]));

const sum = (list) => {
    if (!list.length) return 0;
    return head(list) + sum(tail(list));
};

// console.log(sum([1, 2, 3, 4, 5]));

const length = (list) => {
    if (!list.length) return 0;
    const [_, ...rest] = list;
    return 1 + length(rest);
};

console.log(length([1, 2, 3, 4, 5, 6, , 7, 8, 9]));