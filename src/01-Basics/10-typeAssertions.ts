//  Dear TS, I know better than you here

const setValue = ():unknown => "";

const stringVariable = setValue();


// ! Error: Because of type unknown
// stringVariable.trim()

(stringVariable as string).trim()




