export function randomizeOrdering(len) {
    const order = new Set();

    while (order.size < len) {
        const random = Math.floor(Math.random() * len);
        order.add(random);
    }

    return stringifyOrder([...order]);
}

export function stringifyOrder(orderArray) {
    return btoa(orderArray.join(':'));
}

export function parseOrder(b64str) {
    return atob(b64str).split(':');
}
