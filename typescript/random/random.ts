export const CHARACTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const random = {
    aToB: (a = 0, b = 1): number => {
        return Math.floor(Math.random() * (b - a + 1) + a);
    },
    string: (size = 8): string => {
        return Array.apply(null, Array(size)).map(() => {
            return random.fromArray<string>(CHARACTERS.split(''));
        }).join('');
    },
    fromArray: <T>(list: T[]): T => {
        return list[Math.floor(Math.random() * list.length)];
    },
    bool: () => {
        return Math.random() >= 0.5;
    },
    int: (a = 0, b = 10) => {
        return random.aToB(a, b);
    },
    float: (a = 0, b = 1) => {
        return Math.random() * (b - a) + a;
    }
};
