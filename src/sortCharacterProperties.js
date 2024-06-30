export function sortCharacterProperties(character, sort) {
    const arrSort = [];
    const arr = [];
    for (const prop in character) {
        if(sort.includes(prop)) {
            arr.push({
                key: prop, value: character[prop]
            });
        } else {
            arrSort.push({
                key: prop, value: character[prop]
            });
        }
    }

    arrSort.sort((a, b) => {
        return b.key > a.key ? -1 : 1;
    });

    return arr.concat(arrSort);
}