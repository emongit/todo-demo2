export const LANGUAGES = [
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'eee'
];

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000)
    })
}