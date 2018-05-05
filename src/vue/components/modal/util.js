let count = 0;
const zIndex = 10000;

export default {
    increase () {
        count ++;
        return count;
    },
    decrease () {
        count --;
        return count;
    },
    getZindex () {
        return zIndex + count;
    }
};