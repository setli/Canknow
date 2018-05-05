export function cot(value) {
    return 1 / Math.tan(value);
}

export function square(value) {
    return value * value;
}

export function getBit(value, position) {
    return (value & (1 << position));
}

export function clamp(x, a, b) {
    return (x < a) ? a : ((x > b) ? b : x);
}