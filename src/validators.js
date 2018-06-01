export const required = value => value === undefined ? 'Required' : '';

export const notEmpty = value => value.trim() === '' ? `Can't be empty` : '';

export const spacesInUsername = value => 
    value.replace(/[\s]/g, '') !== value 
    ? `Username can't have spaces`
    : '';

export const tooBigOrTooSmall = value => {
    if(value.length > 72) {
        return `Cant be greater than 72 characters`;
    }

    if(value.length < 10){
        return `Can't be smaller than 10 characters`;
    }
}