export function chunk(array, size) {
    size = Math.max(size, 0);
    const length = array == null ? 0 : array.length;

    if (!length || size < 1) {
        return []
    }
    let index = 0;
    let resIndex = 0;
    const result = new Array(Math.ceil(length / size));

    while (index < length) {
        result[resIndex++] = Array.slice.call(array, index, (index += size));
    }
    return result
}

export function compact(array) {
    let resIndex = 0;
    const result = [];

    if (array == null) {
        return result
    }

    for (const value of array) {

        if (value) {
            result[resIndex++] = value;
        }
    }
    return result
}