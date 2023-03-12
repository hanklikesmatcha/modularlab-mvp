export const captaliseWord = (word: string) => {
    const normalisdCamelCase = word.replace(/([a-z](?=[A-Z]))/g, '$1 ')
    return normalisdCamelCase.charAt(0).toUpperCase() + normalisdCamelCase.slice(1);
};